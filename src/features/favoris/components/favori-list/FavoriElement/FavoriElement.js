import React, { Component } from "react";
import Style from "./FavoriElement.module.scss";

export default class FavoriElement extends Component {
  render() {
    return (
      <div className={"d-flex flex-row bg-light " + Style.container}>
        <img width="150" src={this.props.favori.img} alt="film" />
        <div className="flex-fill d-flex flex-column p-3">
          <h5>{this.props.favori.title}</h5>
          <hr className="w-100" />
          <p className="flex-fill ">{this.props.favori.details}</p>
          <div className="d-flex flex-row justify-content-end">
            <button
              onClick={() => {
                this.props.removeFavori(this.props.favori.title);
              }}
              className="btn btn-small btn-danger"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}
