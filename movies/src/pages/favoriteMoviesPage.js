import React from "react";
import PageTemplate from "../components/templateMovieListPage";

const FavoriteMoviesPage = (props) => {
  const toDo = () => true; // Placeholder for future removal functionality
  const movies = JSON.parse(localStorage.getItem("favorites"));

  return (
    <PageTemplate
      title="Favourite Movies"
      movies={movies}
      selectFavorite={toDo} // Not needed for now
    />
  );
};

export default FavoriteMoviesPage;
