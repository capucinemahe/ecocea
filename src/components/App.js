import React from "react";
import { useEffect, useState } from "react";
import "../styles/App.css";

export default function App() {

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

        // const dataReceived = [];
        // data.results.forEach((film) => {
        //   dataReceived.push(film)
        // });

        setGetData(data.results);
        // setGetData(data.results[0].title);
        
      });
  }, []);

  return (
    <div className="container">
      <h1>Movies List</h1>

      <div className="container_movie">

        <div>
          {getData.map((data) => {
            return data.title;
          })}
        </div>
    
      </div>
    </div>
  );
}
