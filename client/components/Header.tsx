import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const treatments = [
    "Erectile Dysfunction",
    "Weight Loss",
    "Low Testosterone",
    "Diagnostics",
    "Hair Loss",
    "Supplements",
    "Premature Ejaculation",
    "Beard Growth",
  ];

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-primary text-background py-2 px-4 text-center text-sm font-medium">
        Save 60% on your first month of ED treatment (Max. £35)
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left: Menu */}
          <div className="hidden md:flex items-center">
            <Button
              variant="ghost"
              className="text-foreground hover:text-primary font-semibold"
            >
              What we treat ▼
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
            <h1 className="text-2xl font-bold text-primary">numan</h1>
          </div>

          {/* Right: Account */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-foreground">
              <User size={20} />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-border p-4">
            <div className="space-y-3">
              {treatments.map((treatment) => (
                <a
                  key={treatment}
                  href="#"
                  className="block text-foreground hover:text-primary py-2 text-sm"
                >
                  {treatment}
                </a>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <Button className="w-full" size="lg">
                  Get started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
