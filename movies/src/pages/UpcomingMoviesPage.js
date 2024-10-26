// src/pages/UpcomingMoviesPage.js
import React from 'react';
import { getUpcomingMovies } from '../api/tmdb-api';
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import MovieCard from '../components/movieCard';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'; // Import your icon
import IconButton from '@mui/material/IconButton'; // Import IconButton

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = data?.results || [];

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => (
        <IconButton aria-label="add to watchlist">
          <PlaylistAddIcon />
        </IconButton>
      )}
    />
  );
};

export default UpcomingMoviesPage;
