import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "83180d03424d437a0c97c2612109cdff";
const limit = 8;

export const getMovies = async (query) => {
  const params = {
    query: query,
    api_key: apiKey,
    language: "en-US"
  };

  const response = await axios.get(`${baseUrl}/search/movie`, {params});
  return response.data.results.slice(0, limit);
};

export const getMovie = async (id) => {
  const params = {
    api_key: apiKey
  };

  const response = await axios.get(`${baseUrl}/movie/${id}`, {params});
  return response.data;
};
