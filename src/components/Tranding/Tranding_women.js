import React from 'react';
import { data_product_trending_women } from '../Assets/tranding_products_data';

const Tranding_women = () => {
    return (
        <div className="p-6 md:p-12 bg-gray-100">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">Trending in Women</h1>
            <hr className="border-gray-300 mb-8 mx-auto w-1/2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data_product_trending_women.map((product) => (
                    <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300" key={product.id}>
                        <div className='overflow-hidden'>
                            <img src={product.image} alt={product.name} className="w-full h-100 object-cover p-4 pb-0" />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                            <div className="flex justify-center items-baseline gap-2">
                                <p className="text-gray-500 line-through text-base md:text-lg">₹{product.old_cost}</p>
                                <p className="text-red-500 font-semibold text-base md:text-lg">₹{product.new_cost}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tranding_women;
