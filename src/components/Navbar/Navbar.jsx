import React from 'react';
import logo from '../Assets/logo.png';
import cart_logo from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';

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
                    <Link
                        to='/'
                        className="hover:text-gray-300 hover:border-b-2 border-white pb-2 focus:outline-none focus:text-gray-300 focus:border-b-2"
                    >
                        Shop All
                    </Link>
                </li>
                <li>
                    <Link
                        to='/'
                        className="hover:text-gray-300 hover:border-b-2 border-white pb-2 focus:outline-none focus:text-gray-300 focus:border-b-2"
                    >
                        Shop Men
                    </Link>
                </li>
                <li>
                    <Link
                        to='/'
                        className="hover:text-gray-300 hover:border-b-2 border-white pb-2 focus:outline-none focus:text-gray-300 focus:border-b-2"
                    >
                        Shop Women
                    </Link>
                </li>
                <li>
                    <Link
                        to='/'
                        className="hover:text-gray-300 hover:border-b-2 border-white pb-2 focus:outline-none focus:text-gray-300 focus:border-b-2"
                    >
                        Shop Kids
                    </Link>
                </li>
                <li>
                    <Link
                        to='/'
                        className="hover:text-gray-300 hover:border-b-2 border-white pb-2 focus:outline-none focus:text-gray-300 focus:border-b-2"
                    >
                        Contact Us
                    </Link>
                </li>
            </ul>

            {/* Actions: Login, Sign Up, Cart */}
            <div className="flex items-center space-x-4">
                <button className="px-4 py-2 bg-transparent border border-white rounded-md hover:bg-white hover:text-slate-800 transition duration-200">
                    Login
                </button>
                <button className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-500 transition duration-200">
                    Sign Up
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
