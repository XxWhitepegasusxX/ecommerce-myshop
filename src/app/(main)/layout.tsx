import Footer from "@/components/custom/footer";
import "../globals.css";
import Navbar from "@/components/custom/navbar";
import Searchbar from "@/components/custom/searchbar";


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <Searchbar/>
      <Navbar/>
      <body>{children}</body>
      <Footer/>
    </html>
  );
}