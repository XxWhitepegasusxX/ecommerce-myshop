import React from "react"
import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function Searchbar(){
    return (
        <form className="flex bg-white w-4/5 sm:w-3/5 md:w-2/5 items-center absolute rounded-lg top-2 left-1/2 -translate-x-1/2">
            <Button type="submit" variant="ghost">
                <Search/>
            </Button>
            <Input placeholder="Search for products..." className="bg-transparent border-0"/>
        </form>
    )
}