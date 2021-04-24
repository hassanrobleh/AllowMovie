import React, { Component, lazy, Suspense } from "react";
import { Header } from "./components";
import apiMovie, { apiMovieMap } from "./conf/api.movie";
import apiFirebase from "./conf/api.firebase";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const LazyFilms = lazy(() =>
  import(/* webpackChunkName: "Films"*/ "./features/films")
);
const LazyFavoris = lazy(() =>
  import(/* webpackChunkName: "Favoris"*/ "./features/favoris")
);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
      selectedMovie: 0,
      loaded: false,
      favoris: null,
    };
  }

  componentDidMount() {
    apiMovie
      .get("/discover/movie")
      .then((response) => response.data.results)
      .then((moviesApi) => {
        const movies = moviesApi.map(apiMovieMap);
        //console.log(movies);
        this.updateMovies(movies);
      })
      .catch((err) => console.log(err));

    apiFirebase.get("favoris.json").then((response) => {
      //console.log(response);
      let favoris = response.data ? response.data : [];
      this.updateFavori(favoris);
    });
  }

  updateMovies = (movies) => {
    this.setState({
      movies,
      loaded: this.state.favoris ? true : false,
    });
  };

  updateFavori = (favoris) => {
    this.setState({
      favoris,
      loaded: this.state.movies ? true : false,
    });
  };

  /* const index = this.state.movies.findIndex((m) => {
    return title === m.title;
  }); */

  updateSelectedMovie = (index) => {
    this.setState({
      selectedMovie: index,
    });
  };

  addFavori = (title) => {
    const film = { ...this.state.movies.find((m) => m.title === title) };
    this.setState(
      (state) => ({
        favoris: [...this.state.favoris, film],
      }),
      this.saveFavoris()
    );
  };

  removeFavori = (title) => {
    const index = this.state.favoris.findIndex((f) => f.title === title);
    this.setState(
      (state) => ({
        favoris: state.favoris.filter((_, i) => i !== index),
      }),
      this.saveFavoris()
    );
  };

  saveFavoris = () => {
    apiFirebase.put("favoris.json", this.state.favoris);
  };

  /*   addFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const film = this.state.movies.find((m) => m.title === title);
    favoris.push(film);
    this.setState({
      favoris,
    });
  };

  removeFavori = (title) => {
    const favoris = this.state.favoris.slice();
    const index = this.state.favoris.findIndex((f) => f.title === title )
    favoris.splice(index, 1);
    this.setState({
      favoris
    })
  } */

  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default App;
