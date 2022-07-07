import React from "react";
import { useEffect, useState } from "react";
import "../styles/App.css";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=41749e6d0881a27a54199ebeb0986671&language=fr-FR&page=1`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setMovies(data.results);
      });
  }, []);

  //check if the array selectedMovies contain id
  function isSelected(id) {
    return selectedMovies.includes(id);
  }

  //on click, if id already present, id deleted from the array and returns an array
  //if not present, added to the selectedMovies array
  function handleClick(id) {
    if (isSelected(id)) {
      setSelectedMovies([...selectedMovies.filter(item => item !== id)]);
    } else {
      setSelectedMovies([...selectedMovies, id]);
    }
  }

  return (
    <div className="container">
      <h1>Movies List</h1>

      <p>({selectedMovies.length} selected)</p>

      <div className="movies_container">
        <ul className="movies_list">
          {movies.map((movie) => (
            <li key={movie.id}
              className={`movie_card ${isSelected(movie.id) ? "green" : ""}`}
              onClick={() => handleClick(movie.id)}>
              <p className="movie_popularity">{movie.popularity}</p>
              <p className="movie_title"> {movie.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
};