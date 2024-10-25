import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';

const HomePage = (props) => {
  const { data, error, isLoading, isError } = useQuery('discover', getMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Safely access data.results
  const movies = data?.results || []; // Use optional chaining to prevent errors

  // Store favorites based on the presence of a 'favorite' property
  const favorites = movies.filter(m => m.favorite);
  localStorage.setItem('favorites', JSON.stringify(favorites));

  const addToFavorites = (movieId) => {
    const updatedMovies = movies.map((m) => 
      m.id === movieId ? { ...m, favorite: true } : m
    );

    // Store updated favorites in local storage
    const updatedFavorites = updatedMovies.filter(m => m.favorite);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <PageTemplate
      title='Discover Movies'
      movies={movies}
      selectFavorite={addToFavorites}
    />
  );
};

export default HomePage;
