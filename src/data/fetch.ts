// TODO: change to prod url when posts are ready
// const BASE_URL = "https://test.visitvasteras.se/wp-json/visit-vasteras";
const BASE_URL = "https://visitvasteras.se/wp-json/visit-vasteras";

export const get = async (url: string) => {
  const response = await fetch(BASE_URL + url);
  const data = await response.json();
  return data;
};
