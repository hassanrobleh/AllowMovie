import React, { Component } from "react";
import { Formik } from "formik";

export default class SearchBar extends Component {
  submit = (values, actions) => {
    this.props.fetchMovies(values).then(() => actions.setSubmitting(false));
    //console.log(values);
    /* const query =
      "?" +
      Object.keys(values)
        .map((k) => `${k}=${values[k]}&`)
        .join("");
    //console.log(query);

    apiMovie
      .get("/search/movie" + query)
      .then((response) => response.data.results)
      .then((moviesApi) => {
        const movies = moviesApi.map(apiMovieMap);
        //console.log(movies);
        this.props.updateMovies(movies);
        actions.setSubmitting(false);
      })
      .catch((err) => console.log(err)); */
  };
  render() {
    return (
      <Formik
        onSubmit={this.submit}
        initialValues={{ query: "", language: "en-US" }}
      >
        {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form className="d-flex flex-row p-2 m-2" onSubmit={handleSubmit}>
            <input
              name="query"
              className="flex-fill form-control mr-2"
              placeholder="search ..."
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <select
              name="language"
              className="mr-2 form-control w-25"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="en-US">Anglais</option>
              <option value="fr-FR">Français</option>
            </select>
            <button
              className="btn btn-small btn-success"
              type="submit"
              disabled={isSubmitting}
            >
              Search
            </button>
          </form>
        )}
      </Formik>
    );
  }
}
