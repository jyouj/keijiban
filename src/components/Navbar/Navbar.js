import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks/SignedInLinks';
import SignedOutLinks from './SignedOutLinks/SignedOutLinks';

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
    return (
        <nav className="nav-wrapper orange darken-2">
            <div className="container">
                <Link to='/' className="brand-logo">React Keijiban</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);