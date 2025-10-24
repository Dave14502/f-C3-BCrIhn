import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  gradient: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Sildenafil",
    description: "Fördert starke Erektionen",
    price: "Ab £1,15 / Tablette",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23444' width='200' height='200'/%3E%3C/svg%3E",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    id: 2,
    name: "Tadalafil",
    description: "Wirkt bis zu 36 Stunden",
    price: "Ab £1,38 / Tablette",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23444' width='200' height='200'/%3E%3C/svg%3E",
    gradient: "from-purple-600 to-purple-800",
  },
  {
    id: 3,
    name: "Viagra Connect",
    description: "Rezeptfrei erhältlich",
    price: "Ab £8,75",
    originalPrice: "£13.12",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23444' width='200' height='200'/%3E%3C/svg%3E",
    gradient: "from-red-600 to-red-800",
  },
  {
    id: 4,
    name: "Cialis Together",
    description: "Rezeptfrei erhältlich",
    price: "Ab £6,25",
    originalPrice: "£10.63",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect fill='%23444' width='200' height='200'/%3E%3C/svg%3E",
    gradient: "from-indigo-600 to-indigo-800",
  },
];

export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const itemsPerView = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;

  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Unsere ED-Behandlungen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Unsere ED-Behandlungen
          </h2>
          <p className="text-lg text-muted-foreground">
            Wirksame Behandlungen, vertraut von über 500.000 Männern
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Products Grid - Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`transform transition-all duration-300 ${
                  index === currentIndex ? "opacity-100 scale-100" : "hidden md:block"
                }`}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows - Mobile only */}
          <div className="md:hidden flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-border hover:bg-secondary transition"
            >
              <ChevronLeft size={24} className="text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-border hover:bg-secondary transition"
            >
              <ChevronRight size={24} className="text-foreground" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" className="hidden md:inline-flex">
            Beginnen Sie Ihre ED-Behandlung
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className={`bg-gradient-to-br ${product.gradient} rounded-lg overflow-hidden`}>
      <div className="aspect-square bg-secondary/50 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-white/90 mb-4">{product.description}</p>

        {product.originalPrice && (
          <div className="mb-2">
            <span className="text-white/70 line-through text-sm">
              {product.originalPrice}
            </span>
          </div>
        )}

        <p className="text-white font-semibold mb-6">{product.price}</p>

        <Button variant="secondary" className="w-full">
          Mehr erfahren
        </Button>
      </div>
    </div>
  );
}
