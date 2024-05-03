'use client'
import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import CartSheet from './sheets/cartSheet'
import useCartStore from '@/global/cart'

function CartIcon() {
    const count = undefined
    const items = useCartStore((state) => state.items)
    
    if(items.length > 0){
        return (
          <Sheet>
              <SheetTrigger>
                  <div className='fixed bottom-4 rounded-full cursor-pointer p-4 right-4 bg-[#424242]'>
                      <ShoppingCartIcon color='white' width={30}/>
                        <div className="absolute rounded-full px-3 py-1 -top-4 -right-1 bg-red-500">
                            <p className='text-white'>{items.length}</p>
                        </div>
                  </div>
              </SheetTrigger>
              <SheetContent>
                  <SheetHeader>
                      <SheetTitle className='md:text-lg'>Cart</SheetTitle>
                  </SheetHeader>
                  <CartSheet/>
              </SheetContent>
          </Sheet>
        )
    }

}

export default CartIcon