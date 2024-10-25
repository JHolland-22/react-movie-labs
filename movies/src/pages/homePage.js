import React, { useState, useEffect } from "react";
import MovieList from "../components/movieList";
import FilterMoviesCard from "../components/filterMoviesCard";
import Grid from "@mui/material/Grid";

const HomePage = (props) => {
  const [movies, setMovies] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");

  // Fetch movies from API on mount
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => json.results)
      .then((movies) => {
        setMovies(movies);
      });
  }, []);

  const genreId = Number(genreFilter);

  // Filter movies based on title and genre
  let displayedMovies = movies
    .filter((m) => m.title.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter((m) => (genreId > 0 ? m.genre_ids.includes(genreId) : true));

  // Handle changes to filters
  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
    else setGenreFilter(value);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1> HomePage </h1>
      </Grid>
      <Grid item xs={12}>
        <FilterMoviesCard
          onUserInput={handleChange}
          titleFilter={nameFilter}
          genreFilter={genreFilter}
        />
      </Grid>
      <Grid item xs={12}>
        <MovieList movies={displayedMovies} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
