import React from 'react';

const Movie = (prop) => {
  return (
    <div className = "movie">
      <h3>{ props.movie.title }</h3>
      <h4> { props.movies.genre }</h4>
      <p> { props.movies.description }</p>
      </div>
  );
};

export default Movie;
