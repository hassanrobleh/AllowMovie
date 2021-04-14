import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
        <header className="navbar navbar-expand-lg navbar-light gb-light">
            <a className="navbar-brand" href="/">AllowMovie</a>
            
            <div className="navbar navbar-expand ml-auto">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/">Home</a> */}
                        <NavLink to="/films" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="/">Favorie</a> */}
                        <NavLink to="/favoris" className="nav-link">Favoris</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
  }
}
