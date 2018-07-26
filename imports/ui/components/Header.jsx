import React from 'react';
import { NavLink } from 'react-router-dom';

import LoginButtons from './LoginButtons.jsx';

export default class Header extends React.Component {
  render() {
    return (
      <header className='Header'>
        <nav className="navbar navbar-expand-sm bg-light" style={{backgroundColor: '#001b33',color: '#3b97ff',marginBottom:'0px'}}>
  <a className="navbar-brand" href="#">Inganji</a>
  <div>
  


<ul className="nav navbar-nav navbar-right">
  <li className="nav-item">
    <a className="nav-link" href="/">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/services">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/contact">Contact</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/about">About us</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" ><LoginButtons align='left' /></a>
  </li>
    <li className="nav-item" style={{paddingTop:'7px',paddingRight:'25px'}} >
 <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </li>
    </ul>
  </div>

</nav>
        
      </header>
    );
  }
}
