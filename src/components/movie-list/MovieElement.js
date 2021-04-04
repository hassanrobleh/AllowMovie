import React, { Component } from "react";

export default class MovieElement extends Component {
  render() {
    return (
        <div className="w-50 p-2">
          <div className="border d-flex">
              <img width="150" height="200" src="https://www.gstatic.com/tv/thumb/v22vodart/24674/p24674_v_v8_ag.jpg" alt="film" />
              <div className="flex-fill d-flex flex-column p-3">
                <h5>Titre</h5>
                <hr className="w-100" />
                <p>Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire avec une bravoure et un dévouement exemplaires.</p>
              </div>
          </div>
        </div>
    );
  }
}