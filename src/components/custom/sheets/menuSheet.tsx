import { CreditCard, Heart, Settings, ShoppingBag, User } from 'lucide-react'
import React from 'react'

function MenuSheet() {
  return (
    <div className="flex flex-col gap-2 pt-5 w-full">
        <div className="flex cursor-pointer gap-4 mx-auto w-10/12 rounded p-2 bg-[#FFFFFF]">
            <User/>
            <p>My profile</p>
        </div>
        <div className="flex cursor-pointer gap-4 mx-auto w-10/12 rounded p-2 bg-[#FFFFFF]">
            <Heart/>
            <p>Favorite List</p>
        </div>
        <div className="flex cursor-pointer gap-4 mx-auto w-10/12 rounded p-2 bg-[#FFFFFF]">
            <ShoppingBag/>
            <p>Latest Purchases</p>
        </div>
        <div className="flex cursor-pointer gap-4 mx-auto w-10/12 rounded p-2 bg-[#FFFFFF]">
            <CreditCard/>
            <p>Payment Methods</p>
        </div>
        <div className="flex cursor-pointer gap-4 mx-auto w-10/12 rounded p-2 bg-[#FFFFFF]">
            <Settings/>
            <p>Settings</p>
        </div>
    </div>
  )
}

export default MenuSheet