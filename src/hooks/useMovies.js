import {useCallback, useEffect, useReducer} from "react";
import {moviesReducer} from "../reducers";
import {initialMoviesState} from "../reducers/movies";
import {MoviesClient} from "../api";
import {MoviesActions} from "../actions";

const useMovies = (query) => {
  const [state, dispatch] = useReducer(moviesReducer, initialMoviesState);

  const fetchMovies = useCallback(async () => {
    if (query.length < 3) return;
    const movies = await MoviesClient.getMovies(query);
    dispatch(MoviesActions.setMovies(movies));
  }, [query]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const getMovie = async (id) => {
    const movie = await MoviesClient.getMovie(id);
    dispatch(MoviesActions.setMovie(movie));
  };

  return {
    movies: state.movies,
    movie: state.movie,
    getMovie,
  };
};

export default useMovies;
