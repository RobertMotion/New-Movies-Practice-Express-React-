//import react //
import React, { Component } from 'react';

import Movie from './Movie';

import MovieForm from './MovieForm';

// setting up MovieList //
class MovieList extends Component {
  constructor (props){
    super(props);
    this.state = {
      movies: null,
      dataLoaded: false,
      auth: props.auth
      currentlyEditing: null,
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.setEditing =this.setEditing.bind(this);
  }
componentDidMount(){
  this.getAllMovies();
}

  // set up componentDidMount for API fetch
  getAllMovies(){
    fetch('/api/movies', { credentials: 'inlcude' })
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res.data.movies,
          dataLoaded: true,
      })
    }).catch(err => console.log(err));
  }

handleFormSubmit(method, e, data, id){
  e.preventDefault()
  fetch('/api/movies/${id || ''}' {
    method: method,
    credentials:'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(res => res.json())
  .then(res => {
    console.log(res);
    this.getAllMovies();
  }).catch(err => console.log(err));
}
// displays movieList on screen//
  renderMovieList(){
    if(this.state.dataLoaded){
      return this.state.movies.map(movie => {
        return <Movie key= { movie.id } movie={ movie } />
      })
      }else return <p>Loading...</p>
    }

    render (){
      return(
        <div classNaame ="movielist">
          {this.renderMovieList()}
          <Route exact path='/movies' render={() => <MovieList auth= {this.state.auth} />} />
        </div>
      )
    }
  }


export default MovieList;
