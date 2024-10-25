import React from "react";
import PageTemplate from "../components/templateMovieListPage";

const FavoriteMoviesPage = (props) => {
  // Get movies from local storage.
  const movies = JSON.parse(localStorage.getItem("favorites")) || []; 

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      selectFavorite={() => {}} // Placeholder for future functionality
    />
  );
};

export default FavoriteMoviesPage;
