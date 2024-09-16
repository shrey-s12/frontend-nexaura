import React from 'react'
import {new_collections} from "../Assets/new_collection"
import Item from '../Item/Item'

const New_Collection = () => {
    return (
        <div className="p-4 md:p-10 bg-white-100">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center">New Collection</h1>
            <hr className="border-gray-300 mb-8 mx-auto w-1/2" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {new_collections.map((item, i) => {
                    return <Item itemInfo={item} key={i} />
                })}
            </div>
        </div>
    )
}

export default New_Collection