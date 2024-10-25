import React from "react";
import MovieHeader from "../headerMovie";
import Grid from "@mui/material/Grid2";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useQuery } from "react-query";             // Import useQuery
import Spinner from '../spinner';                     // Import the Spinner component
import { getMovieImages } from "../../api/tmdb-api"; // Import getMovieImages

const TemplateMoviePage = ({ movie, children }) => {
  // Use useQuery to fetch movie images
  const { data: images = [], error, isLoading, isError } = useQuery(
    ["images", { id: movie.id }], // Cache key
    getMovieImages                 // Function to fetch images
  );

  // Handle loading state
  if (isLoading) {
    return <Spinner />;
  }

  // Handle error state
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <MovieHeader movie={movie} />

      <Grid container spacing={5} style={{ padding: "15px" }}>
        <Grid size={{ xs: 3 }}>
          <div
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <ImageList
              sx={{
                height: "100vh",
              }}
              cols={1}
            >
              {images.posters?.map((image) => ( // Access posters from the images data
                <ImageListItem key={image.file_path} cols={1}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                    alt={image.file_path} // Use file_path for alt attribute
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>

        <Grid size={{ xs: 9 }}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default TemplateMoviePage;
