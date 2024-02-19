import './App.css';
import api from "./api/axiosConfig";
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Trailer from './components/Trailer';
import Reviews from './components/Reviews';
import NotFound from './components/NotFound';

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();

  console.log(movies);
  // function call to api
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      // console.log(response);
      setMovies(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviews);
    } catch (error) {
      console.log(error);
    }
  }

  // load up movies when it first mounts
  useEffect(() => {
    getMovies();
  },[])

  return (
    <div className="app">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/"
              element={<Home movies={movies} />}
            />
            <Route path="/trailer/:ytTrailerId"
              element={<Trailer />}
            />
            <Route path="/reviews/:movieId"
              element={<Reviews
                getMovieData={getMovieData}
                reviews={reviews || []}
                setReviews={setReviews}
                movie={movie}
              />}
            />
            <Route path="*"
              element={<NotFound />}
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
