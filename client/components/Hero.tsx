import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-20">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Image placeholder */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 500'%3E%3Crect fill='%23333' width='500' height='500'/%3E%3C/svg%3E"
                alt="ED treatment illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
                Men's Health
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Tackle Erectile Dysfunction
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Trusted by over 500,000 men.
            </p>

            <div className="pt-2">
              <p className="text-base">
                From{" "}
                <span className="text-primary font-semibold">£1.43 / tablet</span>
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-foreground">
                  Clinically proven treatments, discreetly delivered
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-foreground">
                  Comprehensive blood tests to identify the root cause
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-foreground">
                  Access to leading men's health experts
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <Button size="lg" className="w-full md:w-auto">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 md:mt-20 border-t border-border pt-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Enjoy better sex again
              </h3>
              <p className="text-muted-foreground mt-2">
                Clinically proven treatments delivered discretely to your door.
              </p>
            </div>
            <Button
              size="lg"
              className="md:w-auto"
            >
              Get started →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
