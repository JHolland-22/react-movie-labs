import React from "react";
import PageTemplate from "../components/templateMovieListPage";

const FavoriteMoviesPage = (props) => {
  const toDo = () => {}; // Placeholder function
  const movies = JSON.parse(localStorage.getItem("favorites")) || [];

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      selectFavorite={toDo}
    />
  );
};

export default FavoriteMoviesPage;
