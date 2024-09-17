import React from 'react';
import { Link, NavLink } from 'react-router-dom';  // Import NavLink
import logo from '../Assets/navbar/logo.png';
import cart_logo from '../Assets/navbar/cart_icon.png';

const Navbar = () => {
    return (
        <nav className="navbar bg-slate-800 p-4 text-white flex justify-between items-center w-full">
            {/* Logo and title */}
            <div className="flex items-center space-x-3">
                <img src={logo} alt="Logo" className="h-10 w-10 object-contain" />
                <h1 className="text-2xl font-bold">NexAura</h1>
            </div>
            


            {/* Navigation links */}
            <ul className="hidden md:flex space-x-6 font-semibold">
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `relative group text-white transition-colors duration-200 ease-in-out ${isActive ? 'text-yellow-400' : ''} hover:underline`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <span className="transition-colors duration-300 ease-in-out">Shop All</span>
                                <span
                                    className={`absolute inset-x-0 bottom-0 top-4 h-1 bg-gradient-to-r from-yellow-400 to-transparent transform ${isActive ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300`}
                                ></span>
                            </>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/shop-men'
                        className={({ isActive }) =>
                            `relative group text-white transition-colors duration-200 ease-in-out ${isActive ? 'text-yellow-400' : ''} hover:underline`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <span className="transition-colors duration-300 ease-in-out">Shop Men</span>
                                <span
                                    className={`absolute inset-x-0 bottom-0 top-4 h-1 bg-gradient-to-r from-yellow-400 to-transparent transform ${isActive ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300`}
                                ></span>
                            </>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/shop-women'
                        className={({ isActive }) =>
                            `relative group text-white transition-colors duration-200 ease-in-out ${isActive ? 'text-yellow-400' : ''} hover:underline`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <span className="transition-colors duration-300 ease-in-out">Shop Women</span>
                                <span
                                    className={`absolute inset-x-0 bottom-0 top-4 h-1 bg-gradient-to-r from-yellow-400 to-transparent transform ${isActive ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300`}
                                ></span>
                            </>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/shop-kids'
                        className={({ isActive }) =>
                            `relative group text-white transition-colors duration-200 ease-in-out ${isActive ? 'text-yellow-400' : ''} hover:underline`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <span className="transition-colors duration-300 ease-in-out">Shop Kids</span>
                                <span
                                    className={`absolute inset-x-0 bottom-0 top-4 h-1 bg-gradient-to-r from-yellow-400 to-transparent transform ${isActive ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300`}
                                ></span>
                            </>
                        )}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            `relative group text-white transition-colors duration-200 ease-in-out ${isActive ? 'text-yellow-400' : ''} hover:underline`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                <span className="transition-colors duration-300 ease-in-out">Contact Us</span>
                                <span
                                    className={`absolute inset-x-0 bottom-0 top-4 h-1 bg-gradient-to-r from-yellow-400 to-transparent transform ${isActive ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300`}
                                ></span>
                            </>
                        )}
                    </NavLink>
                </li>
            </ul>

            {/* Actions: Login, Sign Up, Cart */}
            <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-transparent border border-white rounded-md text-white hover:bg-white hover:text-slate-800 transition-colors duration-300 shadow-md hover:shadow-lg">
                    Login
                </button>
                <button className="px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-500 transition-colors duration-300 shadow-md hover:shadow-lg">
                   <Link to="/signup">Sign Up</Link> 
                </button>
                <div className="relative">
                    <img src={cart_logo} alt="Cart Logo" className="h-8 w-8 filter invert" />
                    <div className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                        0
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
