import apiFirebaseRequest from "../../conf/api.firebase";

export const REQUEST_FAVORIS = "request favoris";
export const FETCH_FAVORIS = "fetch favoris";
export const FETCH_FAVORIS_SUCCESS = "fetch favoris success";
export const FETCH_FAVORIS_ERROR = "fetch favoris error";

export const TRY_ADD_FAVORIS = "try add favoris";
export const ADD_FAVORIS_SUCCESS = "add favoris success";
export const ADD_FAVORIS_ERROR = "add favoris error";

export const TRY_REMOVE_FAVORIS = "try remove favoris";
export const REMOVE_FAVORIS_SUCCESS = "remove favoris success";
export const REMOVE_FAVORIS_ERROR = "remove favoris error";

export const requestFavoris = () => ({
  type: REQUEST_FAVORIS,
});

export const fetchFavorisSuccess = (favoris) => ({
  type: FETCH_FAVORIS_SUCCESS,
  favoris,
});

export const fetchFavorisError = (error) => ({
  type: FETCH_FAVORIS_ERROR,
  error,
});

export const fetchFavoris = () => (dispatch) => {
  dispatch(requestFavoris());
  return apiFirebaseRequest.fetchFavoris().then(
    (favoris) => dispatch(fetchFavorisSuccess(favoris)),
    (error) => dispatch(fetchFavorisError(error))
  );
};

export const addFavoriSuccess = (favoris) => ({
  type: ADD_FAVORIS_SUCCESS,
  favoris,
});

export const addFavoriError = (error) => ({
  type: ADD_FAVORIS_ERROR,
  error,
});

export const tryAddFavori = (movie) => (dispatch, getState) => {
  const favoris = [...getState().favoris.data, movie];
  return apiFirebaseRequest.saveFavoris(favoris).then(
    () => dispatch(addFavoriSuccess(favoris)),
    (error) => dispatch(addFavoriError(error))
  );
};

export const removeFavoriSuccess = (favoris) => ({
  type: REMOVE_FAVORIS_SUCCESS,
  favoris,
});

export const removeFavoriError = (error) => ({
  type: REMOVE_FAVORIS_ERROR,
  error,
});

export const tryRemoveFavori = (title) => (dispatch, getState) => {
  const favoris = [ ...getState().favoris.data];
  const index = favoris.findIndex((f) => f.title === title);
  favoris.splice(index, 1);

  return apiFirebaseRequest.saveFavoris(favoris).then(
    () => dispatch(removeFavoriSuccess(favoris)),
    (error) => dispatch(removeFavoriError(error))
  );
};
