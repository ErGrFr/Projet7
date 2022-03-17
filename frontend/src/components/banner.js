import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/icon-left-font.png'
import '../styles/Banner.css'

function Banner() {
    return (
    <nav class="navbar navbar-expand-lg">
        <div className="mybanner">
            <img src={logo} alt='Groupomania logo' className='logo' />
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <NavLink activeClassName="nav-item" to="/">
                        <li class="nav-link active">HomeNavLink</li>
                    </NavLink>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="../../public/index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../../public/signin.html">Login</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    );
}
export default Banner