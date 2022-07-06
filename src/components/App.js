import React from "react";
import { useEffect, useState } from "react";
import "../styles/App.css";

export default function App({ id, popularity, title }) {
  const [getData, setGetData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=41749e6d0881a27a54199ebeb0986671&language=fr-FR&page=1`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setGetData(data.results);
      });
  }, []);

  return (
    <div className="container">
      <h1>Movies List</h1>

      <div className="movies_container">
        <ul className="movies_list">
          {getData.map((movie) => (
            <div className="movie_card">
              <p className="movie_popularity">{movie.popularity}</p>
              <p className="movie_title"> {movie.title}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
