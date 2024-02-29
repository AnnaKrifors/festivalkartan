const BASE_URL =
  "https://test.vasterascityfestival.se/wp-json/places/v1/places/";

export const get = async <T>(url: string) => {
  const response = await fetch(BASE_URL + url);
  const data = await response.json();
  return data as T;
};
