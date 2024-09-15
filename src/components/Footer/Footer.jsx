import React from 'react';
import footer_logo from '../Assets/footer/footer_logo.png';
import insta_icon from '../Assets/footer/instagram_icon.png';
import pinterest_icon from '../Assets/footer/pinterest_icon.png';
import whatsApp_icon from '../Assets/footer/whatsapp_icon.png';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container px-10 mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-10">
                {/* Logo and Branding */}
                <div className="flex items-center space-x-3">
                    <img src={footer_logo} alt="Footer Logo" className="h-12 w-12 object-contain" />
                    <p className="text-2xl font-bold">NexAura</p>
                </div>

                {/* Navigation Links */}
                <ul className="flex flex-wrap justify-center space-x-6 font-medium">
                    <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Company</li>
                    <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Products</li>
                    <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Offices</li>
                    <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">About</li>
                    <li className="hover:text-yellow-400 transition-colors duration-300 cursor-pointer">Contact</li>
                </ul>

                {/* Social Media Icons */}
                <div className="flex space-x-4 filter invert">
                    <a href="#">
                        <img src={insta_icon} alt="Instagram" className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href="#">
                        <img src={pinterest_icon} alt="Pinterest" className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
                    </a>
                    <a href="#">
                        <img src={whatsApp_icon} alt="WhatsApp" className="h-8 w-8 hover:scale-110 transition-transform duration-300" />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-gray-400 text-sm">
                <hr className='mt-6 w-[95%] mx-auto border-gray-600' />
                <p className='mt-4'>&copy; 2021 NexAura. All Rights Reserved. Created by <span className="text-white font-semibold">Shrey Singhal</span></p>
            </div>
        </footer>
    );
};

export default Footer;
