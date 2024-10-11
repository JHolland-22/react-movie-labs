import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import img from '../../images/pexels-dziana-hasanbekava-5480827.jpg';
import { getGenres } from "../../api/tmdb-api"; // Centralized API call

const formControl = {
  margin: 1,
  minWidth: 220,
  backgroundColor: "rgb(255, 255, 255)",
};

export default function FilterMoviesCard(props) {
  const [genres, setGenres] = useState([{ id: "0", name: "All" }]);

  // Fetch genres from the centralized API call
  useEffect(() => {
    getGenres()
      .then((apiGenres) => {
        setGenres([genres[0], ...apiGenres]);
      })
      .catch((error) => {
        console.error("Error fetching genres:", error);
      });
    // eslint-disable-next-line
  }, []);

  const handleChange = (e, type) => {
    props.onUserInput(type, e.target.value); // Pass changes to the parent component
  };

  return (
    <Card sx={{ backgroundColor: "rgb(204, 204, 0)" }} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies
        </Typography>

        <TextField
          sx={formControl}
          id="filled-search"
          label="Search by title"
          type="search"
          variant="filled"
          value={props.titleFilter} // Controlled component
          onChange={(e) => handleChange(e, "name")} // Handle name filter change
        />

        <FormControl sx={formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={props.genreFilter} // Controlled component
            onChange={(e) => handleChange(e, "genre")} // Handle genre filter change
          >
            {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </CardContent>

      <CardMedia
        sx={{ height: 300 }}
        image={img}
        title="Filter"
      />

      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the movies
        </Typography>
      </CardContent>
    </Card>
  );
}
