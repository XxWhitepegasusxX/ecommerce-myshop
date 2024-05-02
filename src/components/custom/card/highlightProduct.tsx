'use client'
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

import { Button } from "../../ui/button";
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon as ShoppingCartIconOutline, HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline'
import { motion } from "framer-motion"
import If from "../if";
import { useToast } from "../../ui/use-toast";

export default function HighlightProduct(){
    //TODO add fetch function to highlight product
    const [inCart, setInCart] = useState<boolean>(false)
    const [inFavorite, setInFavorite] = useState<boolean>(false)
    const { toast } = useToast()
    const item = {
        name: 'SmartWatch',
        price: '$240.90',
        image: "/images/highlight.jpg"
    }

    function handleAddToCart(){
        toast({
            title: "Success",
            description: inCart ? 'Item removed from cart' : 'Item added to cart'
        })
        setInCart(!inCart)
    }
    function handleAddToFavorite(){
        toast({
            title: "Success",
            description: inFavorite ? 'Item removed from favorite' : 'Item added to favorite'
        })
        setInFavorite(!inFavorite)
    }

    return (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.01}} transition={{ duration: 0.5 }} className="mx-auto relative w-[90%] sm:max-w-[70vw] max-h-[60vh] rounded overflow-hidden">
            <img className="w-full relative h-full" src={"/images/highlight.jpg"} alt="highlight product"/>
            <div className="h-1/2 w-full absolute flex justify-between items-end pb-4 px-4 bottom-0 bg-gradient-to-t from-white to-transparent">
                <div className="info">
                    <h2 className="font-bold text-base sm:text-lg">SmartWatch</h2>
                    <p>$240.90</p>
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
        </motion.div>
    )
}