import React from 'react';

const NewsLetter = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 lg:px-24 text-center shadow-md">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Get Exclusive Offers in Your Inbox</h1>
      <p className="text-lg md:text-xl text-gray-600 mb-6">Subscribe to our newsletter and stay on top of fashion</p>
      
      <div className="flex justify-center items-center gap-4">
        <input
          type="email"
          placeholder="Enter email here"
          className="w-full md:w-2/3 lg:w-1/3 p-3 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
        />
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
