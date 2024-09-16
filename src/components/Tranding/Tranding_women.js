import React from 'react';
import { data_product_trending_women } from '../Assets/tranding_products_data';
import Item from '../Item/Item';

const Tranding_women = () => {
    return (
        <div className="p-6 md:p-12 bg-gray-100">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">Trending in Women</h1>
            <hr className="border-gray-300 mb-8 mx-auto w-1/2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {data_product_trending_women.map((item, i) => {
                    return <Item itemInfo={item} key={i} />
                })}
            </div>
        </div>
    );
};

export default Tranding_women;
