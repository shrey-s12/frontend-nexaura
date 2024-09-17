import { createContext } from 'react';
import { all_products } from '../components/Assets/all_products';

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
    const products = all_products;
    console.log(products);

    return (
        <ShopContext.Provider value={products}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;