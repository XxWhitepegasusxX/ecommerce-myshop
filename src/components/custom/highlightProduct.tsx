'use client'
/* eslint-disable @next/next/no-img-element */
import { Button } from "../ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion"
export default function HighlightProduct(){
    return (
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ scale: 1.01}} transition={{ duration: 0.5 }} className="mx-auto relative w-[90%] sm:max-w-[70vw] max-h-[60vh] rounded overflow-hidden">
            <img className="w-full relative h-full" src={"/images/highlight.jpg"} alt="highlight product"/>
            <div className="h-1/2 w-full absolute flex justify-between items-end pb-4 px-4 bottom-0 bg-gradient-to-t from-white to-transparent">
                <div className="info">
                    <h2 className="font-bold text-base sm:text-lg">SmartWatch</h2>
                    <p>$240.90</p>
                </div>
                <div className="actions flex gap-1">
                    <Button><ShoppingCart/></Button>
                    <Button className="bg-white hover:bg-red-300"><Heart className="text-red-500"/></Button>
                </div>
            </div>
        </motion.div>
    )
}