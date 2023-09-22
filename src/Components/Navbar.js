import React from 'react';
import { Link } from 'react-router-dom';

// Setting up the Navbar component and styling using Bootstrap
const Navbar = () => {
    return (
        <nav className="navbar bg-success d-flex justify-content-evenly" data-bs-theme="dark">
            <div className='container-fluid'>
                <Link to='/' className='navbar-brand fs-3 mx-auto p-2'>CONTACT LIST APP</Link>
            </div>
            <div className=''>
                <Link to='/add' className='btn btn-dark shadow'>Add Contact</Link>
            </div>
        </nav >
    )
}

export default Navbar;