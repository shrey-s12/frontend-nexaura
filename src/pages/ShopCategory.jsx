import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopCategory';
import dropdown_icon from "../components/Assets/banner/dropdown_icon.png";
import Item from "../components/Item/Item";

const ShopCategory = ({ category, banner }) => {
  const products = useContext(ShopContext) || [];
  const category_products = products.filter(product => product.category === category);

  return (
    <div className="px-4 py-4 md:px-8 lg:px-8">
      {/* Banner Section */}
      <div className="mb-10 relative">
        <img
          src={banner}
          alt={category}
          className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Sort and Count Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-8 pb-4 border-b border-gray-300">
        {/* Showing Products Count */}
        <p className="text-gray-700 text-sm md:text-base mb-4 md:mb-0">
          <span className="font-semibold text-gray-900">Showing 1-12</span> of {category_products.length} products
        </p>

        {/* Sorting Section */}
        <div className="flex items-center space-x-2 text-gray-800 text-sm md:text-base">
          <div className="relative">
            <button className="flex items-center space-x-2 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 hover:from-gray-200 hover:via-gray-300 hover:to-gray-200 text-gray-700 py-2 px-4 rounded-full shadow-sm hover:shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-300">
              <span className="font-semibold">Sort by</span>
              <img src={dropdown_icon} alt="dropdown" className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>


      {/* Product Grid */}
      <div className="bg-gray-50 p-4 md:p-8 rounded-lg shadow-inner">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {category_products.length > 0 ? (
            category_products.slice(0, 12).map((item, i) => (
              <Item itemInfo={item} key={i} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products available in this category.</p>
          )}
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full hover:bg-gradient-to-l transition-all duration-300 shadow-lg hover:scale-105 transform">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default ShopCategory;
