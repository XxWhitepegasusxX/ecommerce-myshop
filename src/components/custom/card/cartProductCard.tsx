/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import useCartStore from '@/global/cart'
import Image from 'next/image'
import React from 'react'

interface Item{
  item: {
      name: string,
      price: number,
      image: string,
      quantity: number
  }
}

function CartProductCard({item}: Item) {
  const increase = useCartStore((state) => state.increaseQuantity)
  const decrease = useCartStore((state) => state.decreaseQuantity)
  
  return (
    <Card className='flex justify-between items-center p-2'>
        <img src={item.image} className='w-10 rounded' alt='Product'/>
        <h2>{item.name}</h2>
        <div className="relative flex items-center max-w-[4rem]">
            <Button onClick={() => decrease(item.name)} type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="rounded bg-white hover:bg-neutral-100 p-1.5 h-6 ">
                <svg className="w-2 h-2 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                </svg>
            </Button>
            <input disabled value={item.quantity} type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="block bg-transparent border-0 w-full text-center" />
            <Button onClick={() => increase(item.name)} type="button" id="increment-button" data-input-counter-increment="quantity-input" className="rounded bg-white hover:bg-neutral-100 p-1.5 h-6 ">
                <svg className="w-2 h-2 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
            </Button>
        </div>
        <p>${(item.price * item.quantity).toFixed(2)}</p>
    </Card>
  )
}

export default CartProductCard