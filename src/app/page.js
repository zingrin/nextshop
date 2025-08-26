import Hero from "@/components/Hero";
import ProductsPage from "./products/page";
import About from "./about/page";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <ProductsPage></ProductsPage>
    <About></About>
    <Reviews></Reviews>
   </div>
  );
}
