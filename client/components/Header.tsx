import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
              fürihn™
            </h1>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-foreground"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Right: CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              className="bg-primary hover:bg-primary/90"
              onClick={() => {
                window.open("https://tally.so/r/mVRz7a", "_blank");
              }}
            >
              Fragebogen starten
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-border p-4">
            <div className="space-y-3">
              <Button
                className="w-full"
                size="lg"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.open("https://tally.so/r/mVRz7a", "_blank");
                }}
              >
                Fragebogen starten
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
