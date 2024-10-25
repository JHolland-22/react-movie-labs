import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage"; // Import MovieReviewPage
import SiteHeader from './components/siteHeader'; // Import SiteHeader

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader /> {/* Use the SiteHeader component here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/reviews/:id" element={<MovieReviewPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
