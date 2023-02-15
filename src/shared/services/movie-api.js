import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    key: 'd80261a2a92a1b96bfd0993be732c39d',
  },
});

export const searchMovies = async (q, page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      page,
    },
  });
  return data;
};
