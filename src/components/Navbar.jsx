import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>   
            <div className=""></div>
            <div className="nav space-x-3 text-accent">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>about</NavLink>
                <NavLink to='/career'>career</NavLink>
            </div>
            <div className="login-btn flex gap-3">
                <img src={user} alt="" />
                <Link to={'/auth/login'} className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;