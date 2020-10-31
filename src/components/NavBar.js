import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (

        <nav className="main-nav">
            <ul>
            <li><NavLink exact to ='/'>Home</NavLink></li>
            <li><NavLink to ='/cats'>Cats</NavLink></li>
            <li><NavLink to ='/dogs'>Dogs</NavLink></li>
            <li><NavLink to ='/monuments'>Monuments</NavLink></li>
            <li><NavLink to ='/search'>Search</NavLink></li>
            </ul>
        </nav>

    )
}

export default NavBar;