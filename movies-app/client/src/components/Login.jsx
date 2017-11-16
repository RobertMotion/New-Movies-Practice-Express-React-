import React, { Component } from 'react';

class Login extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			password: '',
		}
	this.handleInputChange = this.handleInputChange.bind(this)
		
	}
	
	
  handleInputChange(e) {
    const name = e.target.name;
    const val = e.target.value;
    this.setState({
      [name]: val,
    });
  }
  
  render() {
	  return (
		<div>
		  <form onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
		  <input type="text" placeholder="Username"  value={this.state.username} onChange={this.handleInputChange}/>
		  <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
		  <input type="submit" value="Log In!" />
		  </form>
		</div>
		  
	  )
  }
  
  
  
  }
  
  export default Login;