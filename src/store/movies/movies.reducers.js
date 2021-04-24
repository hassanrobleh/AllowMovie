import * as actions from "./movies.actions";

const movies = (
  state = {
    data: [],
    isLoading: false,
    error: null,
    selectedMovie: 0,
  },
  action
) => {
  switch (action.type) {
    case actions.FETCH_MOVIES: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actions.FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [...action.movies],
      };
    }
    case actions.FETCH_MOVIES_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    }
    case actions.SET_SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovie: action.index,
      };
    }

    default: {
      return state;
    }
  }
};

export default movies;
