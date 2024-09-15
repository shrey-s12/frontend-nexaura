import React from 'react';
import hand_icon from '../Assets/hero/hand_icon.png';
import arrow_icon from '../Assets/hero/arrow_icon.png';
import hero_image from '../Assets/hero/hero_image.png';

const Hero = () => {
    return (
        <div className="relative flex items-center justify-between px-12 h-screen bg-gradient-to-b from-white via-pink-200 to-transparent">
            {/* Left Section */}
            <div className="flex-1 flex flex-col justify-center pl-10 md:pl-20 lg:pl-44 gap-2 md:gap-2">
                <div className="flex items-center gap-4 md:gap-6 animate-fade-in">
                    <img src={hand_icon} alt="hand_icon" className="w-20 md:w-24 transform transition-transform hover:scale-110" />
                    <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900">new</p>
                </div>
                <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 animate-fade-in">collections</p>
                <p className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 animate-fade-in">for smart gen</p>
                <div className="flex items-center gap-4 md:gap-6 mt-6 md:mt-8 animate-fade-in">
                    <button className="bg-red-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full text-base md:text-lg font-medium hover:bg-red-600 transition-transform transform hover:scale-105 flex items-center gap-2">
                        Shop Now
                        <img src={arrow_icon} alt="arrow_icon" className="w-8 md:w-10 animate-pulse hover:scale-110" />
                    </button>
                </div>
            </div>
            {/* Right Section */}
            <div className="flex-1 flex justify-center items-center mr-12 max-w-lg animate-fade-in">
                <img src={hero_image} alt="hero_image" className="transform transition-transform duration-300 hover:scale-105" />
            </div>
        </div>
    );
};

export default Hero;
