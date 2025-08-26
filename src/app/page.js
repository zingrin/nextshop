import Hero from "@/components/Hero";
import Image from "next/image";
import ProductsPage from "./products/page";
import About from "@/components/About";

export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <ProductsPage></ProductsPage>
    <About></About>
   </div>
  );
}
