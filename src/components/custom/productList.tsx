import React from 'react'
import items from '@/data/products'
import CardProduct from './card/cardProduct'

interface ProductListProps{
    category?: string
}

function ProductList({category = "All Products"}: ProductListProps) {
  return (
    <div className='container mx-auto w-full my-4'>
        <h2 className='text-2xl font-bold mb-2'>{category}</h2>
        <div className="grid mx-auto w-full grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item, idx) => (
                <CardProduct item={item} key={item.name + idx}/>
            ))}
        </div>
    </div>
  )
}

export default ProductList