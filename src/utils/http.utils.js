import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_API_BEARER_TOKEN}` },
});

export function getTrendingTvShows(timeWindow) {
  return instance
    .get(`/trending/tv/${timeWindow}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
}

export function getDetails(id) {
  return instance
    .get(`/tv/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
}
export async function getTvShows(q) {
  return instance
    .get(`/search/tv?query=${q}`)
    .then((response) => {
      console.log('response', response)
      return response.data;
    })
    .catch((error) => console.log(error));
}
