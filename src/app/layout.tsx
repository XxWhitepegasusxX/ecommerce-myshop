import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/navbar";
import Searchbar from "@/components/custom/searchbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyShop",
  description: "Buy Everything",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <Searchbar/>
      <Navbar/>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
