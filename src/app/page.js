import Hero from "./components/Hero";
import CategorySlider from ".//components/CategorySlider";
import ProductTabs from "./components/ProductTabs";
// import PromoCards from "@/components/ProductCard";
// import MiniProducts from "@/components/MiniProducts";
// import Banner from "@/components/Banner";

export default function HomePage() {
  return (
    <main>
      <Hero />
       <CategorySlider />
       
      <ProductTabs />
      {/*<PromoCards />
      <MiniProducts />
      <Banner /> */}
    </main>
  );
}
