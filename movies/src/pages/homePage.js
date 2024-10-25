import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MovieList from "../components/movieList";
import FilterMoviesCard from "../components/filterMoviesCard";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0"); // Default to 'All' genre

  // Fetching movie data
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        setMovies(json.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  // Filter movies based on title and genre
  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const genreMatch = genreFilter === "0" || movie.genre_ids.includes(Number(genreFilter));
    return titleMatch && genreMatch;
  });

  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>HomePage</h1>
      </Grid>
      <Grid item xs={12} sm={3}>
        {/* Pass filters to FilterMoviesCard */}
        <FilterMoviesCard
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          setTitleFilter={setTitleFilter}
          setGenreFilter={setGenreFilter}
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        {/* Display filtered movies */}
        <MovieList movies={filteredMovies} />
      </Grid>
    </Grid>
  );
};

export default HomePage;
