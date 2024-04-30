import React from "react"
import { InfiniteMovingCards } from "../ui/infinite-moving-card"
import items from "@/data/products"

export default function PopularProducts(){
    return (
        <div className="container flex flex-col">
            <h2 className="text-2xl font-bold">Popular products</h2>
            <InfiniteMovingCards
                items={items}
                speed="slow"
            />
        </div>
    )
}