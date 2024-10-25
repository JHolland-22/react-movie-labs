import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import SiteHeader from './components/siteHeader';

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
createRoot(rootElement).render(<App />);
