import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage"; // Import FavoriteMoviesPage
import SiteHeader from "./components/siteHeader"; // Ensure this matches the filename

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader /> {/* Use the SiteHeader component here */}
      <Routes>
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/reviews/:id" element={<MovieReviewPage />} />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} /> {/* Ensure this route exists */}
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />); // This renders the App component

export default App; // Ensure this line exists
