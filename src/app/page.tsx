import HighlightProduct from "@/components/custom/highlightProduct";
import PopularProducts from "@/components/custom/popularProducts";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function Home() {
  return (
    <main className="mt-14">
      <HighlightProduct/>
      <Separator className="my-10 max-w-4xl mx-auto bg-[#424242]"/>
      <PopularProducts/>
    </main>
  );
}