import React, { Component, lazy, Suspense } from "react";
import { Header } from "./components";
import { BrowserRouter as Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFavoris } from "./store/actions";

const LazyFilms = lazy(() =>
  import(/* webpackChunkName: "Films"*/ "./features/films")
);
const LazyFavoris = lazy(() =>
  import(/* webpackChunkName: "Favoris"*/ "./features/favoris")
);
class App extends Component {
  componentDidMount() {
    this.props.fetchFavoris();
  }

  render() {
    return (
      <div className="App d-flex flex-column">
        <Header />
        <Suspense fallback={<h1>Loading ....</h1>}>
          <Switch>
            <Route path="/films" component={LazyFilms} />
            <Route path="/favoris" component={LazyFavoris} />
            <Redirect to="/films" />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default connect(null, {
  fetchFavoris,
})(App);
