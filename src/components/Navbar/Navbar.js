import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks/SignedInLinks';
import SignedOutLinks from './SignedOutLinks/SignedOutLinks';

const Navbar = () => {
    return (
        <nav className="nav-wrapper orange darken-2">
            <div className="container">
                <Link to='/' className="brand-logo">React Keijiban</Link>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    )
}

export default Navbar;