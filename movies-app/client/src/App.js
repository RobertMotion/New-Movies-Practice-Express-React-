import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      user: null,
      auth: false,
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
          <Route exact path='/' component={Home} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
