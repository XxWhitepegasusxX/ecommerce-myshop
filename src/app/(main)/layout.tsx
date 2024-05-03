import Footer from "@/components/custom/footer";
import "../globals.css";
import Navbar from "@/components/custom/navbar";
import CartIcon from "@/components/custom/cartIcon";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <CartIcon/>
      <Navbar/>
      <body>{children}</body>
      <Footer/>
    </html>
  );
}