const getFilms = async url => {
  const response = await fetch(url);
  const film = await response.json();

  return film;
};

export default getFilms;
