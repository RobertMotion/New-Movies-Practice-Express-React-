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
