import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";                 // Import useQuery
import Spinner from '../spinner';                         // Import Spinner
import { getMovieReviews } from "../../api/tmdb-api";   // Import getMovieReviews
import { excerpt } from "../../utils";

export default function MovieReviews({ movie }) {
  // Use useQuery to fetch movie reviews
  const { data: reviews = [], error, isLoading, isError } = useQuery(
    ["reviews", { id: movie.id }], // Cache key
    getMovieReviews                   // Function to fetch reviews
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="reviews table">
        <TableHead>
          <TableRow>
            <TableCell>Author</TableCell>
            <TableCell align="center">Excerpt</TableCell>
            <TableCell align="right">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.results?.map((r) => ( // Access results from reviews
            <TableRow key={r.id}>
              <TableCell component="th" scope="row">
                {r.author}
              </TableCell>
              <TableCell>{excerpt(r.content)}</TableCell>
              <TableCell>
                <Link
                  to={`/reviews/${r.id}`} // Ensure this matches the path defined in App.js
                  state={{
                    review: r,
                    movie: movie,
                  }}
                >
                  Full Review
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
