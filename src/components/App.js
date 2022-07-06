import React from "react";
import { useEffect, useState } from "react";
import "../styles/App.css";

export default function App({movie}) {
  const [getData, setGetData] = useState([]);

  const [count, setCount] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=41749e6d0881a27a54199ebeb0986671&language=fr-FR&page=1`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setGetData(data.results);
      });
  }, []);

  const handleClick = (id) => {
    setCount(id);
    console.log(id);

    alert(`Vous avez selectionné le film ${id} ? Très bon choix`)
  };

  return (
    <div className="container">
      <h1>Movies List</h1>

      <p> selected {count} </p>

      <div className="movies_container">
        <ul className="movies_list">
          {getData.map((movie) => (
            <li key={movie.id} className="movie_card" onClick={() => handleClick(movie.id)}>

              <p className="movie_popularity">{movie.popularity}</p>
              <p className="movie_title"> {movie.title}</p>

            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
