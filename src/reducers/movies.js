import {SET_MOVIE, SET_MOVIES} from "../constants/actions";

export const initialMoviesState = {
  movies: [],
  movie: null,
}

const moviesReducer = (state, action) => {
  switch (action.type) {
    case SET_MOVIES: {
      return {...state, movies: action.payload.movies};
    }

    case SET_MOVIE: {
      return {...state, movie: action.payload.movie};
    }

    default: {
      return state;
    }
  }
};

export default moviesReducer;
