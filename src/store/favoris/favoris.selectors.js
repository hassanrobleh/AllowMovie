import { createSelector } from "reselect";

export const favoriSelector = (state) => state.favoris;

export const favorisListSelector = createSelector(
  [favoriSelector],
  (favoris) => favoris.data
);

export const favorisIsLoadingSelector = createSelector(
  [favoriSelector],
  (favoris) => favoris.isLoading
);

export const favorisListNameSelector = createSelector(
  [favorisListSelector],
  (favorisData) => favorisData.map((f) => f.title)
);
