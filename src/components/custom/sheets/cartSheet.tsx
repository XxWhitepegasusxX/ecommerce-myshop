'use client'
import useCartStore from '@/global/cart'
import React from 'react'
import If from '../if'
import CartProductCard from '../card/cartProductCard'
import { Button } from '@/components/ui/button'

function CartSheet() {
  const items = useCartStore((state) => state.items)
  const total = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  return (
    <div className='relative h-full'>
      <If condition={items.length === 0}>
        <h2 className='text-neutral-600'>No Items found...</h2>
        <p className='text-sm text-neutral-500'>Try add some products in your cart</p>
      </If>
      <If condition={items.length > 0}>
        <div className="flex flex-col gap-2">
          {items.map((item, idx) => (
            <CartProductCard item={item} key={item.name + idx}/>
            ))}
        </div>
        <div className="w-full absolute bottom-4 flex flex-col gap-2">
          <p className='text-lg font-bold'>Total: ${total.toFixed(2)}</p>
          <Button className='w-full'>Buy Now</Button>
        </div>
      </If>
    </div>
  )
}

export default CartSheet