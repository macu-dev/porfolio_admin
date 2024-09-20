/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlocksContent } from '@strapi/blocks-react-renderer';

import { flattenAttributes, getStrapiURL } from '@/lib/utils';

const baseUrl = getStrapiURL();

// interface AboutMeArgs {
//   locale: string;
// }

interface ApiArgsCommons {
  locale: string;
}

interface DataStructureCommons {
  title: string;
  pretitle: string;
  description: BlocksContent;
  subtitle: string | null;
  social_media: {
    x: string | null;
    instagram: string | null;
    linkedin: string | null;
    github: string | null;
    email: string | null;
  };
}

interface Tecnology {
  id: number;
  name: string;
  color: string;
  icon: {
    id: string;
    name: string;
    width: number;
    height: number;
    url: string;
  };
}

interface Proyect extends Omit<DataStructureCommons, 'social_media'> {
  cover: {
    id: number;
    url: string;
  };
  tecnologies: {
    data: Tecnology[];
  };
}

interface Proyects {
  data: Proyect[];
}

interface Trayectory {
  id: number;
  company: string;
  job: string;
  durationStart: string;
  durationEnd: string;
  description: BlocksContent;
}
interface Trayectories {
  data: Trayectory[];
}

type ApiResponses = {
  AboutMe: DataStructureCommons;
  Trayectory: Trayectories;
  Proyects: Proyects;
};

type ApiArgs = {
  AboutMe: ApiArgsCommons;
  Trayectory: ApiArgsCommons;
  Proyects: ApiArgsCommons;
};

type ServiceApi = {
  [K in keyof ApiResponses as `get${K}`]: (
    args: ApiArgs[K],
  ) => Promise<ApiResponses[K]>;
};

export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      next: { revalidate: 60 },
    });
    const data = await response.json();

    return flattenAttributes(data) as T;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

const apiUrls: { [K in keyof ApiArgs]: (args: ApiArgs[K]) => string } = {
  AboutMe: ({ locale }: ApiArgsCommons) =>
    `/api/about-me?locale=${locale}&populate=social_media`,
  Trayectory: ({ locale }: ApiArgsCommons) =>
    `/api/trayectories?locale=${locale}`,
  Proyects: ({ locale }: ApiArgsCommons) =>
    `/api/proyects?locale=${locale}&populate[tecnologies][populate][icon]
  [fields][0]=*&populate[cover][fields][0]=url`,
};

const initServiceApi = (): ServiceApi => {
  const services = {} as ServiceApi;

  for (const key in apiUrls) {
    if (Object.prototype.hasOwnProperty.call(apiUrls, key)) {
      const endpointKey = key as keyof ApiResponses;

      services[`get${endpointKey}` as keyof ServiceApi] = async (
        args: any,
      ): Promise<any> => {
        return fetchData<ApiResponses[typeof endpointKey]>(
          apiUrls[endpointKey](args),
        );
      };
    }
  }

  return services;
};

// Exporta el servicio de API
export const serviceApi = initServiceApi();
