import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage"; // Import the MovieReviewPage component

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/reviews/:id" element={<MovieReviewPage />} /> {/* Add route for MovieReviewPage */}
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
