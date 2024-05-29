import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.poster.url} alt={movie.nameRu} />
      <div className="movie-card-info">
        <h2 className="movie-card-title">{movie.nameRu}</h2>
        <p className="movie-card-description">{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;
