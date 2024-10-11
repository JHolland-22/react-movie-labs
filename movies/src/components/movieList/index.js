import React from "react";
import Grid from "@mui/material/Grid2";
import MovieCard from "../movieCard";

const MovieList = (props) => {
  const movieCards = props.movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <MovieCard movie={m} selectFavorite={props.selectFavorite} /> {/* Pass selectFavorite */}
    </Grid>
  ));
  return movieCards;
};

export default MovieList;
