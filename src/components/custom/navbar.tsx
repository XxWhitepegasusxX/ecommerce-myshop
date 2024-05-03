import React from "react"
import { Menu, BadgeDollarSign, Search } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet"
import MenuSheet from "./sheets/menuSheet"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

export default function Navbar(){
    return(
        <Sheet>
            <div className="rounded fixed items-center top-2 gap-4 flex w-full justify-between px-4 z-40">
                <nav className="flex items-center ">
                    <div className="w-full">
                        <BadgeDollarSign className="cursor-pointer hover:text-yellow-400"/>
                    </div>
                </nav>
                <form className="flex bg-white items-center w-full max-w-lg rounded-lg">
                    <Button type="submit" variant="ghost">
                        <Search/>
                    </Button>
                    <Input placeholder="Search for products..." className="bg-transparent border-0"/>
                </form>
                <SheetTrigger asChild>
                    <Menu className="w-10 cursor-pointer"/>
                </SheetTrigger>
            </div>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                    <MenuSheet/>
            </SheetContent>
        </Sheet>
    )
}