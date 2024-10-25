import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getMovies } from "../api/tmdb-api";

const HomePage = (props) => {
  const [movies, setMovies] = useState([]);

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favorite: true } : m
    );
    setMovies(updatedMovies);
    
    // Update favorites in local storage
    const favorites = updatedMovies.filter(m => m.favorite);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  useEffect(() => {
    getMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};

export default HomePage;
