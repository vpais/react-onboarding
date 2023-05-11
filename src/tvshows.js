import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
  headers: { Authorization: "Bearer " + import.meta.env.VITE_API_BEARER_TOKEN },
});

export async function getTvshows(timeWindow) {
  console.log(timeWindow);
  return instance
    .get(`/trending/tv/${timeWindow}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => console.log(error));
}
