import { flattenAttributes, getStrapiURL } from '@/lib/utils';

const baseUrl = getStrapiURL();

export async function fetchData(url: string) {
  try {
    const response = await fetch(`${baseUrl}${url}`);
    const data = await response.json();

    return flattenAttributes(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching data:', error);
    throw error; // or return null;
  }
}
