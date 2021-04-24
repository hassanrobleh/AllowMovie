import { createSelector } from "reselect";

export const moviesSelector = (state) => state.movies;

export const moviesIsloadingSelector = createSelector(
  [moviesSelector],
  (movies) => movies.isLoading
);

export const moviesListSelector = createSelector(
  [moviesSelector],
  (movies) => movies.data
);

export const moviesSelectedMoviesIndexSelector = createSelector(
  [moviesSelector],
  (movies) => movies.selectedMovies
);

export const moviesSelectedMovieSelector = createSelector(
  [moviesListSelector, moviesSelectedMoviesIndexSelector],
  (moviesData, index) => moviesData[index]
);
