import React, { Component } from 'react';

class Register extends Component {
	constructor(){
		super();
		this.state = {
			username: '',
			email: '',
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
		  <form onSubmit={(e) => this.props.handleRegisterSubmit(e, this.state)}>
		  <input type="text" placeholder="Username"  value={this.state.username} onChange={this.handleInputChange}/>
		  <input type="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange}/>
		  <input type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
		  <input type="submit" value="Register" />
		  </form>
		</div>
		  
	  )
  }
  
}
  
  export default Register;