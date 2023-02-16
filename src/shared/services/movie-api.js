import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd80261a2a92a1b96bfd0993be732c39d',
  },
});

export const searchMovies = async query => {
  console.log(`вызов из апи: ${query}`);
  const { data } = await instance.get('/search/movie', {
    params: {
      query,
    },
  });
  return data;
};

export const getTrendsMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};
