import './App.css';
import api from "./api/axiosConfig";
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState();

  // function call to api
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response);
      setMovies(response.data)
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
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
