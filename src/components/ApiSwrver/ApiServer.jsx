import axios from 'axios';

const API_Key = 'ab2cf7e1a236e63f2cc161486f07b55f';
const URL = 'https://api.themoviedb.org/3';

export async function fetchData(page = 1) {
  const response = await axios.get(
    `${URL}/trending/movie/day?api_key=${API_Key}&language=en-US&page=${page}`
  );
  return response.data;
}

export async function fetchDataCearch(query, page) {
  const response = await axios.get(
    `${URL}/search/movie?api_key=${API_Key}&query=${query}&language=en-US&page=${page}`
  );
  return response.data;
}
export async function getMovieDetails(id) {
  const response = await axios.get(`${URL}/movie/${id}?api_key=${API_Key}`);
  return response.data;
}
export async function getCredits(movie_id) {
  const response = await axios.get(
    `${URL}/movie/${movie_id}/credits?api_key=${API_Key}`
  );
  return response.data;
}
export async function getReviews(movie_id) {
  const response = await axios.get(
    `${URL}/movie/${movie_id}/reviews?api_key=${API_Key}`
  );
  return response.data;
}
