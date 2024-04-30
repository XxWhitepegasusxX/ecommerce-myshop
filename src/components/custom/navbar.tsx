'use client'
import React, { useState } from "react"
import { Store, Menu, ShoppingCart, BadgeDollarSign, LogOut, User, Settings, CreditCard, ShoppingBag } from "lucide-react"
import { Separator } from "../ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"

export default function Navbar(){
    const [sheet, setSheet] = useState<'menu' | 'cart'>('menu')
    return(
        <TooltipProvider>
            <Sheet>
                <div className="aside hidden pb-8 bg-white rounded w-14 h-5/6 fixed top-14 left-5 sm:flex flex-col justify-between">
                    <div className="nav">
                        <div className="w-full py-8">
                            <BadgeDollarSign className="mx-auto cursor-pointer hover:text-yellow-400"/>
                        </div>
                        <Separator/>
                        <div className="flex flex-col items-center gap-8 pt-4">
                            <Tooltip>
                                <TooltipTrigger>
                                    <SheetTrigger asChild>
                                        <Menu onClick={() => setSheet('menu')} className="cursor-pointer"/>
                                    </SheetTrigger>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Menu</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Link href={'/'}>
                                        <Store className="cursor-pointer"/>
                                    </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Shop</p>
                                </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger>
                                    <SheetTrigger asChild>
                                        <ShoppingCart onClick={() => setSheet('cart')} className="cursor-pointer"/>
                                    </SheetTrigger>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Cart</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                    <Tooltip>
                        <TooltipTrigger>
                            <LogOut className="mx-auto cursor-pointer hover:text-red-700"/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>LogOut</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>{sheet === 'cart' ? 'Cart' : 'Menu'}</SheetTitle>
                    </SheetHeader>
                    {sheet === 'cart' ? (
                        <h1>Products:</h1>
                    ) : (
                        <div className="flex flex-col gap-2 pt-5 w-full">
                            <div className="flex cursor-pointer gap-4 mx-auto w-10/12 rounded p-2 bg-[#FFFFFF]">
                                <User/>
                                <p>My profile</p>
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
                    )}
                </SheetContent>
            </Sheet>
        </TooltipProvider>
    )
}