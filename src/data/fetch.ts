export const get = async <T>() => {
  const placesUrl = "mockData.json";
  const response = await fetch(placesUrl);
  const data = await response.json();

  return data as T;
};

export const getDetails = async <T>() => {
  const detailsUrl = "mockDataDetails.json";
  const response = await fetch(detailsUrl);
  const data = await response.json();

  return data as T;
};
