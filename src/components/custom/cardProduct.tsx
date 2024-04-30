/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Button } from '../ui/button'

interface Item{
    item: {
        name: string,
        price: string,
        image: string
    }
}

function CardProduct({item}: Item) {
  return (
    <div className="max-w-sm relative rounded overflow-hidden">
        <img src={item.image} alt="product" className="w-full h-full"/>
        <div className="h-1/2 w-full absolute flex justify-between items-end pb-4 px-4 bottom-0 bg-gradient-to-t from-white to-transparent">
            <div className="info">
            <h2 className='sm:text-lg font-bold'>{item.name}</h2>
            <p>{item.price}</p>
            </div>
            <div className="actions flex gap-1">
            <Button variant="ghost">Add to cart</Button>
            <Button>Like</Button>
            </div>
        </div>
    </div>
  )
}

export default CardProduct