import axios from "../fetchData";
import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ title, fetchUrl, isLarge }) => {
  const baseImgUrl = "https://image.tmdb.org/t/p/original";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  return (
    <div>
      <h2 className='Category'>{title}</h2>
      <div className="carouselPosters">
        {movies.map((movie) => (
          <img
            className={`carouselPoster ${isLarge && "posterLarge"}`}
            key={movie.id}
            src={`${baseImgUrl}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
