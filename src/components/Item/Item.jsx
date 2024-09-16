import React from 'react'

const Item = ({ itemInfo }) => {
    return (
        <div>
            <div className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300">
                <div className='overflow-hidden'>
                    <img src={itemInfo.image} alt={itemInfo.name} className="w-full h-100 object-cover p-4 pb-0" />
                </div>
                <div className="p-4 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{itemInfo.name}</h3>
                    <div className="flex justify-center items-baseline gap-2">
                        <p className="text-gray-500 line-through text-base md:text-lg">₹{itemInfo.old_cost}</p>
                        <p className="text-red-500 font-semibold text-base md:text-lg">₹{itemInfo.new_cost}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item