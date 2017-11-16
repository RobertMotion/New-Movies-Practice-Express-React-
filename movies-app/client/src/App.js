import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

class App extends Component {
  constructor(){
    super();
    this.state={
      user: null,
      auth: false,
    }
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this)
    this.logout = this.logout.bind(this)
  }
  
    handleLoginSubmit(e, data) {
	  e.preventDeafult();
	  fetch('/api/auth/login', {
		  method: 'POST',
		  headers: {
			  'Content-Type': 'application/json',
		  },
		  credentials: 'include',
		  body: JSON.stringify(data)
	  }).then(res => res.json())
	  	.then(res => {
		  	console.log(res);
		  	this.setState({
			  	auth:res.auth,
			  	user: res.data.user,
		  	})
	  	}).catch(err => console.log(err));
  }
  
    handleRegisterSubmit(e, data) {
	  e.preventDeafult();
	  fetch('/api/auth/register', {
		  method: 'POST',
		  headers: {
			  'Content-Type': 'application/json',
		  },
		  credentials: 'include',
		  body: JSON.stringify(data)
	  }).then(res => res.json())
	  	.then(res => {
		  	console.log(res);
		  	this.setState({
			  	auth:res.auth,
			  	user: res.data.user,
		  	})
	  	}).catch(err => console.log(err));
  }
  
    logout() {
	fetch('/api/auth/logout', {
		credentials: 'include',
	}).then(res => res.json())
	  .then(res => {
		  this.setState({
			  auth: res.auth,
		  })
	  }).catch(err => console.log(err));
  }
  
  componentDidMount() {
	  fetch('/api/auth/verify', {
		  credentials: 'include'
	  }).then(res => res.json())
	    .then(res => {
		    this.setState({
			    auth: res.auth,
			    user: res.data.user,
		    })
	    }).catch(err => console.log(err));
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
          <Route exact path='/' component={Home} />
          <Route exact path='/login' render={() => (
	          this.state.auth ?
	          	<Redirect to='/dashboard' /> :
	          	<Login handleLoginSubmit={this.handleLoginSubmit} /> )}
	          	/>
	      <Route exact path='/dashboard' render={() => (
		      !this.state.auth ? 
		      <Redirect to='/login' /> :
		      <Dashboard user={this.state.user} /> )}
		      />
		  <Route exact path='/register' render={() => (
			  this.state.auth ?
			  <Redirect to='/dashboard' /> :
			  <Register handleRegisterSubmit={this.handleRegisterSubmit}  /> )}
			  />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
