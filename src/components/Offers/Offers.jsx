import React from 'react';
import exclusive_image from '../Assets/offers/exclusive_image.png';

const Offers = () => {
    return (
        <div className="bg-gradient-to-b from-white via-pink-200 to-transparent flex items-center justify-between px-8 pb-4 md:px-52">
            {/* Left Section */}
            <div className="offers-left text-gray-800 space-y-2 md:space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold">Exclusive</h1>
                <h1 className="text-6xl md:text-7xl font-bold">Only For You</h1>
                <p className="text-lg md:text-xl text-gray-700">ON THE BEST SELLERS</p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-full transition duration-300 transform hover:scale-105">
                    Check 'em out
                </button>
            </div>
            {/* Right Section */}
            <div className="offers-right ">
                <img src={exclusive_image} alt="exclusive_image" className="w-64 md:w-80 lg:w-96 transform transition-transform duration-300 hover:scale-105" />
            </div>
        </div>
    );
};

export default Offers;
