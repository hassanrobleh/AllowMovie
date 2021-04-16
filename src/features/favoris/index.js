import React from "react";
import Loading from "../../components/utils/Loading";
import { FavoriList } from "./components";

const Favoris = (props) => {
  return (
    <div className="d-flex flex-row flex-fill pt-4 p-2">
      {props.loaded ? (
        <FavoriList favoris={props.favoris} removeFavori={props.removeFavori} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Favoris;
