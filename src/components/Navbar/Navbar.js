import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="nav-wrapper orange darken-2">
            <div className="container">
                <Link to='/' className="brand-logo">React Keijiban</Link>
            </div>
        </nav>
    )
}

export default Navbar;