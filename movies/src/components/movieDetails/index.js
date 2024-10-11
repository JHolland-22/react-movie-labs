import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import StarRate from "@mui/icons-material/StarRate";
import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const root = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  listStyle: "none",
  padding: 1.5,
  margin: 0,
};
const chip = { margin: 0.5 };

const MovieDetails = () => {
  const { id } = useParams(); // Extract movie ID from URL
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch movie details
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((movie) => setMovie(movie));
  }, [id]);

  useEffect(() => {
    // Fetch movie images
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => setImages(json.posters));
  }, [id]);

  if (!movie) return <div>Loading...</div>; // Add a loading state

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {movie.overview}
      </Typography>

      <Paper component="ul" sx={{ ...root }}>
        <li>
          <Chip label="Genres" sx={{ ...chip }} color="primary" />
        </li>
        {movie.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{ ...chip }} />
          </li>
        ))}
      </Paper>

      <Paper component="ul" sx={{ ...root }}>
        <Chip icon={<AccessTimeIcon />} label={`${movie.runtime} min.`} />
        <Chip
          icon={<MonetizationIcon />}
          label={`${movie.revenue.toLocaleString()}`}
        />
        <Chip
          icon={<StarRate />}
          label={`${movie.vote_average} (${movie.vote_count})`}
        />
        <Chip label={`Released: ${movie.release_date}`} />
      </Paper>

      {/* Render movie images */}
      <ImageList
        sx={{
          height: "100vh",
        }}
        cols={1}
      >
        {images.map((image) => (
          <ImageListItem key={image.file_path} cols={1}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
              alt={image.file_path}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Fab
        color="secondary"
        variant="extended"
        sx={{
          position: "fixed",
          bottom: 2,
          right: 2,
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>
    </>
  );
};

export default MovieDetails;
