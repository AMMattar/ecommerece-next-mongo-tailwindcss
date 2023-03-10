'use client';

import React, { useContext } from 'react'
import { ProductsContext } from './ProductsContext';

function Product({promise }: Props) {

    const {selectedproducts, setSelectedProducts} = useContext(ProductsContext)
    
    function addProduct(_id: string) {
        setSelectedProducts((prev: string[]) => [...prev, _id])
        console.log(selectedproducts);
    }

    const content = promise.product.map(product => {
        return (
            <>
                
                <div className="flex">
                <div className="p-5">
                    <div>
                    <h2 className="text-2xl">{product.category}</h2>
                    <div className="py-4">
                        <div className="w-64">
                        <div className="bg-blue-100 p-5 rounded-xl">
                            <img src={product.picture as string} alt="iphone" />
                        </div>
                        <div className="mt-2">
                            <h3 className="font-bold text-lg">{product.name}</h3>
                        </div>
                        <p className="text-sm mt-1 leading-4">{product.description}</p>
                        <div className="flex mt-1">
                            <div className="text-2xl font-bold grow">${product.price}</div>
                            <button onClick={() => addProduct(product._id as string)} className="bg-emerald-400 text-white py-1 px-3 rounded-xl">+</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </>
        )
    })
  return content
}

export default Product