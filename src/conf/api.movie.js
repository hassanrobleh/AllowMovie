import * as axios from "axios";

export const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/4",
});

apiMovie.interceptors.request.use((req) => {
  req.headers["Authorization"] =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmZkYzE1Mzk1YmFmZWY2MGNkZDM0MDM4MWJiMjQ3MCIsInN1YiI6IjYwNzMyYTU3NjY1NjVhMDA1ODFmODdlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iMQztugwpjNuc8z-dt7H2ycaJgJr7U_Ta-0IDE7rcA0";
  return req;
});

//export const apiMovie;

export const apiMovieMap = (m) => ({
  img: "https://image.tmdb.org/t/p/w500/" + m.poster_path,
  title: m.title,
  details: `${m.release_date} | ${m.vote_average}/10 (vote) | ${m.vote_count}`,
  description: m.overview,
});

const searchMovies = {
  searchMovies: (filter) => {
    const query =
      "?" +
      Object.keys(filter)
        .map((k) => `${k}=${filter[k]}&`)
        .join("");

    return apiMovie
      .get("/search/movie" + query)
      .then((response) => response.data.results)
      .then((moviesApi) => moviesApi.map(apiMovieMap));
    //console.log(movies);)
  },
};

export default searchMovies;
