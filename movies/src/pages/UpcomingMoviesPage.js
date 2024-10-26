// src/pages/upcomingMoviesPage.js
import React from 'react';
import { useQuery } from 'react-query';
import { getUpcomingMovies } from '../api/tmdb-api';
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavorites';

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Safely access data.results
  const movies = data?.results || []; // Use optional chaining to prevent errors

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToFavoritesIcon movie={movie} />
      }}
    />
  );
};

export default UpcomingMoviesPage;
