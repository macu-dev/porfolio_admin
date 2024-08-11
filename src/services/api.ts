/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlocksContent } from '@strapi/blocks-react-renderer';

import { flattenAttributes, getStrapiURL } from '@/lib/utils';

const baseUrl = getStrapiURL();

interface AboutMeArgs {
  locale: string;
}

interface AboutMeData {
  title: string;
  pretitle: string;
  description: BlocksContent;
  subtitle: string | null;
}

type ApiResponses = {
  AboutMe: AboutMeData;
};

type ApiArgs = {
  AboutMe: AboutMeArgs;
};

type ServiceApi = {
  [K in keyof ApiResponses as `get${K}`]: (
    args: ApiArgs[K],
  ) => Promise<ApiResponses[K]>;
};

export async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await fetch(`${baseUrl}${url}`);
    const data = await response.json();

    return flattenAttributes(data) as T;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

const apiUrls: { [K in keyof ApiArgs]: (args: ApiArgs[K]) => string } = {
  AboutMe: ({ locale }: AboutMeArgs) => `/api/about-me-page?locale=${locale}`,
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
