import React, { useState } from "react";
import Drawer from "@mui/material/Drawer"; // Import Drawer
import Fab from "@mui/material/Fab"; // Import Fab (Floating Action Button)
import NavigationIcon from "@mui/icons-material/Navigation"; // Import Icon for the button
import MovieReviews from "../movieReviews"; // Import MovieReviews

const MovieDetails = ({ movie }) => {  // Pass movie as a prop
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control Drawer

  return (
    <>
      {/* Floating Action Button (Fab) to trigger the Drawer */}
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)} // Opens Drawer when clicked
        sx={{
          position: 'fixed', // Fix position on the page
          bottom: '1em',
          right: '1em'
        }}
      >
        <NavigationIcon />
        Reviews
      </Fab>

      {/* Drawer that opens from the top */}
      <Drawer 
        anchor="top" 
        open={drawerOpen} 
        onClose={() => setDrawerOpen(false)} // Close Drawer when clicking outside
      >
        <MovieReviews movie={movie} /> {/* Pass the movie prop to MovieReviews */}
      </Drawer>
    </>
  );
};

export default MovieDetails;
