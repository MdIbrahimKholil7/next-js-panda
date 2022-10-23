import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>

                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-bold">Panda Blog</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 items-center gap-8">
                        <Link href={'/'}><li className='cursor-pointer'>Home</li></Link>
                        <Link href={'/About'}><li className='cursor-pointer'>About</li></Link>
                        <Link href={'/components/Contact'}><li className='cursor-pointer'>Contact</li></Link>
                        <Link href={'/components/Blog'}><li className='cursor-pointer'>Blog</li></Link>
                       
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Get started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;