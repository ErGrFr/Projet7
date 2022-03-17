import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/icon-left-font.png'
import '../styles/Banner.css'

function Banner() {
    return (
    <nav class="navbar navbar-expand-lg">
        <div className="mybanner">
            <img src={logo} alt='Groupomania logo' className='logo' />
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink ClassName="nav-link" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink ClassName="nav-link" to="/Login">Login</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink ClassName="nav-link" to="/Signup">Signup</NavLink>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    
    );
}
export default Banner