import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className=''>

            <div className='grid grid-cols-1 md:grid-cols-2  py-6 container mx-auto'>
                <div>
                    <Link to={'/'}>
                    <h3 className='md:block hidden text-gray-600 text-3xl font-mono font-extrabold'>Baby Shop</h3>
                    </Link>
                </div>
                <div className='flex md:justify-end justify-center gap-x-4 text-gray-600 menu '>
                    <NavLink className={({isActive})=>(isActive ? 'active' : 'link')} to='/'>Home</NavLink>
                    <NavLink className='' to='/reviews'>Reviews</NavLink>
                    <NavLink className='' to={'/dashboard'}>Dashboard</NavLink>
                    <NavLink className='' to={'/blogs'}>Blogs</NavLink>
                    <NavLink className='' to={'/about'}>About</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;