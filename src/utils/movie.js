/* eslint-disable import/prefer-default-export */
export const generateImageUrl = (type = 'poster', path, query) => {
  if (!path) return null;

  const baseUrl = {
    poster: 'https://www.themoviedb.org/t/p/w440_and_h660_face',
    backdrop: 'https://www.themoviedb.org/t/p/w1066_and_h600_bestv2',
    profile: 'https://www.themoviedb.org/t/p/w276_and_h350_face',
    avatar: 'https://www.themoviedb.org/t/p/w276_and_h350_face',
    collection: 'https://www.themoviedb.org/t/p/w1440_and_h320_multi_faces',
  }[type];

  let url = `${baseUrl}${path}`;

  if (query) {
    url += `?${query}`;
  }

  return url;
};
