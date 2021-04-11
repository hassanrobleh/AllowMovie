import React, { Component } from "react";
import { Formik } from "formik";

export default class SearchBar extends Component {
  submit = (values, actions) => {
    console.log(values);
  };
  render() {
    return (
      <Formik onSubmit={this.submit} initialValues={{ query: "" }}>
        {({ handleSubmit, handleChange, handleBlur, isSubmitting }) => (
          <form className="d-flex flex-row p-2 m-2" onSubmit={handleSubmit}>
              <input name="query" className="flex-fill form-control mr-2" placeholder="search ..." onChange={ handleChange } onBlur={ handleBlur}  />
              <button className="btn btn-small btn-success" type="submit" disabled={ isSubmitting }>Search</button>
          </form>
        )}
      </Formik>
    );
  }
}
