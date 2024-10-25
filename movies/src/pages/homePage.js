import React, { useState, useEffect } from "react";
import MovieList from "../components/movieList";
import Grid from "@mui/material/Grid2";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json); // Log the entire API response to examine structure
        return json.results;
      })
      .then((movies) => {
        setMovies(movies);
      })
      .catch((error) => console.error("Error fetching movies:", error)); // Optional: catch errors
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1> HomePage </h1>
      </Grid>
      <Grid container>
        <MovieList movies={movies} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
