'use client'
import React, { useState } from "react"
import { Store, Menu, ShoppingCart, BadgeDollarSign, LogOut, User, Settings, CreditCard, ShoppingBag, Heart } from "lucide-react"
import { Separator } from "../ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import If from "./if"

export default function Navbar(){
    const [sheet, setSheet] = useState<'menu' | 'cart'>('menu')
    const [expanded, setExpanded] = useState<boolean>(false)
    return(
        <TooltipProvider>
            <Sheet>
                <div className={`aside pb-8 bg-white shadow-md rounded overflow-hidden w-10 sm:w-14 ${!expanded ? 'h-[60px] sm:h-[85px]' : 'h-3/6 sm:h-4/6'} fixed top-2 left-1 sm:top-14 sm:left-5 flex z-50 flex-col justify-between`}>
                    <div className="nav">
                        <div className="w-full py-4 sm:py-8">
                            <BadgeDollarSign onClick={() => setExpanded(!expanded)} className="mx-auto cursor-pointer hover:text-yellow-400"/>
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
                    )}
                </SheetContent>
            </Sheet>
        </TooltipProvider>
    )
}