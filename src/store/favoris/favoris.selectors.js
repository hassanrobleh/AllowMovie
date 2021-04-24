import { createSelector } from "reselet";

export const favoriSelector = (state) => state.favoris;

export const favorisListSelector = createSelector(
  [favoriSelector],
  (favoris) => favoris.data
);

export const favorisListNameSelector = createSelector(
  [favorisListSelector],
  (favorisData) => favorisData.map((f) => f.title)
);
