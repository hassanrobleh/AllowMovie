import * as axios from "axios";

const apiMovie = axios.create({
  baseURL: "https://api.themoviedb.org/4",
});

apiMovie.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNmZkYzE1Mzk1YmFmZWY2MGNkZDM0MDM4MWJiMjQ3MCIsInN1YiI6IjYwNzMyYTU3NjY1NjVhMDA1ODFmODdlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iMQztugwpjNuc8z-dt7H2ycaJgJr7U_Ta-0IDE7rcA0'
    return req;
})

export default apiMovie;
