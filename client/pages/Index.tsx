import Hero from "@/components/Hero";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProductsSection />
      <WhyChooseSection />
      <FAQSection />
    </div>
  );
}
