import Hero from "@/components/Hero";
import ProductsPage from "./products/page";
import About from "./about/page";

export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <ProductsPage></ProductsPage>
    <About></About>
   </div>
  );
}
