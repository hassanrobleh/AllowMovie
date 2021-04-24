import * as axios from "axios";

export const apiFirebase = axios.create({
  baseURL:
    "https://films-c7a51-default-rtdb.europe-west1.firebasedatabase.app/",
});

const fetchFavoris = {
  fetchFavoris: () =>
    apiFirebase
      .get("favoris.json")
      .then((response) => (response.data ? response.data : [])),
  saveFavoris: (favoris) => apiFirebase.put("favoris.json", favoris),
};
export default fetchFavoris;
