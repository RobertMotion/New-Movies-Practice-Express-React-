import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
  return(
    <div className="header">
      <ul>
      <Link to='/'><li>Home</li></Link>
      <Link to='/login'><li>Login</li></Link>
      <Link to='/register'><li>Register</li></Link>
      <Link to='/dahsboard'><li>Dashboard</li></Link>
      <Link to='/movies'><li>Movies</li></Link>
      </ul>
    </div>
  )
}

export default Header;
