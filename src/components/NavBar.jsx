import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/logo.png';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <header>
        <nav>
            <div className="logo">
              <img src={Logo}/>
            </div>
            <NavLink to='/Home'>home</NavLink>
            <NavLink to='/Products'>products</NavLink>
            <NavLink to='/Cart'><CartWidget/></NavLink>      
        </nav>
    </header>
  );
}

export default NavBar;