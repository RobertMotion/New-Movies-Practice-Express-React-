import React from 'react';


// set up Movie to have properties && display //
const Movie = (prop) => {
  return (
    <div className = "movie">
      <h3>{ props.movie.title }</h3>
      <h4> { props.movie.genre }</h4>
      <p> { props.movie.description }</p>
      </div>
  );
};

export default Movie;
