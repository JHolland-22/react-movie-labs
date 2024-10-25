import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/movieDetails'; 
import PageTemplate from "../components/templateMoviePage";
import { getMovie, getMovieImages } from "../api/tmdb-api"; // Importing the API functions

const MoviePage = () => {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState([]);

  // Fetch movie details
  useEffect(() => {
    getMovie(id).then((movieData) => {
      setMovie(movieData);
    });
  }, [id]);

  // Fetch movie images
  useEffect(() => {
    getMovieImages(id).then((imageData) => {
      setImages(imageData);
    });
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      {movie ? (
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} images={images} />
        </PageTemplate>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;
