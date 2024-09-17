import React from 'react';

const LoginSignup = () => {
  return (
    <div className="flex justify-center items-center min-h-80 bg-gradient-to-r from-gray-200 to-gray-400 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 md:p-12 max-w-md w-full transform transition-all duration-500 hover:shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Sign Up</h1>
        
        <input
          type="text"
          placeholder="Username"
          className="w-full border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          required
        />
        
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg p-3 mb-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          required
        />
        
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
          required
        />
        
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            id="terms"
            className="mr-2 h-4 w-4 text-indigo-600 focus:ring-indigo-500 transition-transform duration-300 hover:scale-105"
            required
          />
          <label htmlFor="terms" className="text-gray-600 text-sm">
            I accept the{' '}
            <span className="text-indigo-600 hover:underline cursor-pointer transition-all duration-300">terms and conditions</span>
          </label>
        </div>
        
        <div className="text-center mb-6">
          <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
            Sign Up
          </button>
        </div>
        
        <div className="text-center text-gray-600">
          <p className="text-sm">
            Already have an account?{' '}
            <span className="text-indigo-600 hover:underline cursor-pointer transition-all duration-300">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
