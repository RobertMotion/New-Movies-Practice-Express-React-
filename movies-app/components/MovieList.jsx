//import react //
import React, { Component } from 'react';

// setting up MovieList //
class MovieList extends Component {
  constructor (){
    super();
    this.state = {
      movies: null,
      dataLoaded: false,
    }
  }
  // set up componentDidMount for API fetch //
  componentDidMount(){
    fetch('/api/movies', { credentials: 'inlcude' })
      .then(res => res.json())
      .then(res => {
        this.setState({
          movies: res.data.movies,
          dataLoaded: true,
      })
    }).catch(err => console.log(err));
  }

// displays movieList on screen//
  renderMovieList(){
    if(this.state.dataLoaded){
      return <h1>Our movie list will go here!</h1>
      }else return <p>Loading...</p>
    }

    render (){
      return(
        <div classNaame ="movielist">
          {this.renderMovieList()}
        </div>
      )
    }
  }


export default MovieList;
