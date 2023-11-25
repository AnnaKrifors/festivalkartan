const BASE_URL = "https://visitvasteras.se/wp-json/visit-vasteras";

export const get = async <T>(url: string) => {
  const response = await fetch(BASE_URL + url);
  const data = await response.json();
  return data as T;
};
