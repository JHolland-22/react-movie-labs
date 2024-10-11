import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovie, getMovieImages } from "../api/tmdb-api";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    getMovie(id).then((movie) => {
      setMovie(movie);
    });
  }, [id]);

  useEffect(() => {
    getMovieImages(id).then((images) => {
      setImages(images);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {movie ? <h1>{movie.title}</h1> : <p>Loading...</p>}
      {images.length > 0 && <p>Images found: {images.length}</p>}
    </div>
  );
};

export default MovieDetailsPage;
