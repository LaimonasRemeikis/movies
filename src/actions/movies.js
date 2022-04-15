import {SET_MOVIE, SET_MOVIES} from "../constants/actions";

export const setMovies = (movies) => {
  return {
    type: SET_MOVIES,
    payload: { movies: movies }
  };
};

export const setMovie = (movie) => {
  return {
    type: SET_MOVIE,
    payload: { movie: movie }
  };
};
