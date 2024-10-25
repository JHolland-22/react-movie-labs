import React from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api';  // Import the getMovie function
import { useQuery } from "react-query";       // Import useQuery
import Spinner from '../components/spinner';   // Import the Spinner component

const MoviePage = (props) => {
  const { id } = useParams();

  // Use useQuery to fetch movie data
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }], // Cache key
    getMovie               // Function to fetch the movie data
  );

  // Handle loading state
  if (isLoading) {
    return <Spinner />;
  }

  // Handle error state
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // Render the movie details if data is available
  return (
    <>
      {movie ? (
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
      ) : (
        <p>No movie details available</p>
      )}
    </>
  );
};

export default MoviePage;
