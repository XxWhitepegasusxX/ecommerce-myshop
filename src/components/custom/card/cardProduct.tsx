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
  const [inCart, setInCart] = useState<boolean>(false)
  const [inFavorite, setInFavorite] = useState<boolean>(false)
  const { toast } = useToast()
  const add = useCartStore((state) => state.add)
  const remove = useCartStore((state) => state.remove)
  
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
            <div className="info">
            <h2 className='sm:text-lg font-bold'>{item.name}</h2>
            <p>${item.price.toFixed(2)}</p>
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