/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { Button } from '../../ui/button'
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon as ShoppingCartIconOutline, HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'

import { useToast } from '../../ui/use-toast';
import If from '../if';
import useCartStore from '@/global/cart';

interface Item{
    item: {
        name: string,
        price: number,
        image: string
    }
}

function CardProduct({item}: Item) {
  // TODO Add query to popular products
  const { toast } = useToast()
  const items = useCartStore((state) => state.items)
  const add = useCartStore((state) => state.add)
  const remove = useCartStore((state) => state.remove)
  const [inCart, setInCart] = useState<boolean>(items.some(cartItem => cartItem.name === item.name))
  const [inFavorite, setInFavorite] = useState<boolean>(false)

  function handleAddToCart(){
    toast({
        title: "Success",
        description: inCart ? `${item.name} removed from cart` : `${item.name} added to cart`
    })
    if(!inCart){
        add(item)
    }else{
        remove(item)
    }
    setInCart(!inCart)
  }
  function handleAddToFavorite(){
      toast({
          title: "Success",
          description: inFavorite ? `${item.name} removed from favorite` : `${item.name} added to favorite`
      })
      setInFavorite(!inFavorite)
  }

  return (
    <div className="max-w-[20rem] mx-auto relative rounded overflow-hidden">
        <img src={item.image} alt="product" className="w-full h-full"/>
        <div className="h-1/2 w-full absolute flex justify-between items-end pb-4 px-4 bottom-0 bg-gradient-to-t from-white to-transparent">
            <div className="info w-1/2">
                <h2 className='sm:text-lg font-bold'>{item.name}</h2>
                <p>${item.price.toFixed(2)}</p>
                <div className="flex gap-0.5 items-center text-yellow-600 w-2/3">
                    {Array.from({ length: 5 }, (_, idx) => (
                        // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
                        <svg key={item.name + idx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="star" aria-label={`Star ${idx + 1}`}>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
            </div>
            <div className="actions flex gap-1">
              <Button onClick={handleAddToCart}>
                  <If condition={!inCart}>
                      <ShoppingCartIconOutline width={25} height={25}/>
                  </If>
                  <If condition={inCart}>
                      <ShoppingCartIcon width={25} height={25}/>
                  </If>
              </Button>
              <Button onClick={handleAddToFavorite} className="bg-white hover:bg-red-300">
                <If condition={!inFavorite}>
                    <HeartIconOutline color="red" width={25} height={25}/>
                </If>
                <If condition={inFavorite}>
                    <HeartIcon color="red" width={25} height={25}/>
                </If>
              </Button>
            </div>
        </div>
    </div>
  )
}

export default CardProduct