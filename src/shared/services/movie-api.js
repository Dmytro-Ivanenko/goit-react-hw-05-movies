import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd80261a2a92a1b96bfd0993be732c39d',
  },
});

export const searchMovies = async query => {
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

export const getMovieAddInfo = async (id, addInfo = '') => {
  const { data } = await instance.get(`/movie/${id}${addInfo}`);
  return data;
};
