import Hero from "@/components/Hero";
import ProductsPage from "./products/page";
import About from "./about/page";
import Reviews from "@/components/Reviews";
import TrendingCollection from "@/components/TrendingCollection";

export default function Home() {
  return (
   <div>
    <Hero></Hero>
    <ProductsPage></ProductsPage>
    <TrendingCollection></TrendingCollection>
    <About></About>
    <Reviews></Reviews>
   </div>
  );
}
