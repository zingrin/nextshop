import Hero from "@/components/Hero";
import Image from "next/image";
import ProductsPage from "./products/page";

export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <ProductsPage></ProductsPage>
   </div>
  );
}
