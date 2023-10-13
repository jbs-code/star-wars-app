export const getData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getAllPeople = async (currentPage) => {
  const url = `https://swapi.dev/api/people/?page=${currentPage}`;
  const people = await getData(url);

  return people;
};

export const getPeopleByName = async (name, currentPage) => {
  const url = `https://swapi.dev/api/people/?search=${name}&page=${currentPage}`;
  const people = await getData(url);

  return people;
};

export const getImageByName = async(name) => {
    const url = `https://api.giphy.com/v1/stickers/search?q=${name}&api_key=${import.meta.env.VITE_GIPHY_API_KEY}`;
    const image = await getData(url);
    return image.data[1] && image.data[1].images.original.url;
};
