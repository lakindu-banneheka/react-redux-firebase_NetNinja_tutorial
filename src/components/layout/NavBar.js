import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const NavBar = () => {
    return (
        <div>
            <nav className='nav-wrapper grey darken-3' >
                <div className='container'>
                    <Link to='/' className='brand-logo'>marrio Plan</Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        </div>
    );
};

export default NavBar;