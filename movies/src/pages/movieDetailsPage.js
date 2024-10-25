import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/movieDetails'; 
import PageTemplate from "../components/templateMoviePage";

const MoviePage = () => {
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState([]);

  // Fetch movie details
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((movieData) => {
        setMovie(movieData);
      });
  }, [id]);

  // Fetch movie images
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => json.posters)
      .then((imageData) => {
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
