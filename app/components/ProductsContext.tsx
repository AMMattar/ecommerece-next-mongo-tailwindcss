import React, { useState } from 'react'
import { createContext } from 'react'

interface IProductsContext {
    selectedproducts: Array<string>;
    setSelectedProducts: any;
  }

export const ProductsContext = createContext<IProductsContext>({
    selectedproducts: [],
    setSelectedProducts: () => {},
});

export function ProductsContextProvider() {
    const [selectedProducts, setSelectedProducts] = useState([]);
  return (
    <ProductsContext.Provider value={{
        selectedproducts: selectedProducts, 
        setSelectedProducts: setSelectedProducts
        }}>
    </ProductsContext.Provider>
  )
}

