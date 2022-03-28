import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/icon-left-font.png'
import '../styles/Banner.css'

function Banner() {
    return (
    <nav className="navbar navbar-expand-lg">
        <div className="mybanner">
            <img src={logo} alt='Groupomania logo' className='logo' />
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {/* <NavLink to="/" className={(nav) => (nav.isActive ? "nav-link":"nav-link active")}>Home</NavLink> */}
                        {/* <NavLink to="/" className={"nav-link"}>Home</NavLink> */}
                        
                    </li>
                    <li className="nav-item">
                        {/* <NavLink className="nav-link" to="/signin">Login</NavLink> */}
                    </li>
                    <li className="nav-item">
                        {/* <NavLink className="nav-link" to="/signup">Signup</NavLink> */}
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
    
    );
}
export default Banner