export const get = async <T>(url: string) => {
  const response = await fetch(import.meta.env.VITE_URL + url);
  const data = await response.json();
  return data as T;
};
