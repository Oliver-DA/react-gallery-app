import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (

        <nav className="main-nav">
            <ul>
            <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/cats'>Cats</Link></li>
            <li><Link to ='/dogs'>Dogs</Link></li>
            <li><Link to ='/monuments'>Monuments</Link></li>
            <li><Link to ='/search'>Search</Link></li>
            </ul>
        </nav>

    )
}

export default NavBar;