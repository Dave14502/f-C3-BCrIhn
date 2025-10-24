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
                Männergesundheit
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Überwindung der Erektionsstörung
              </h1>
            </div>

            <p className="text-lg text-muted-foreground">
              Vertraut von über 500.000 Männern.
            </p>

            <div className="pt-2">
              <p className="text-base">
                Ab{" "}
                <span className="text-primary font-semibold">£1,43 / Tablette</span>
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-foreground">
                  Klinisch nachgewiesene Behandlungen, diskret geliefert
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-foreground">
                  Umfassende Bluttests zur Ursachenbestimmung
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-primary flex-shrink-0 mt-1" size={20} />
                <span className="text-foreground">
                  Zugang zu führenden Fachleuten für Männergesundheit
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <Button size="lg" className="w-full md:w-auto">
                Jetzt starten
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
                Genießen Sie wieder besseren Sex
              </h3>
              <p className="text-muted-foreground mt-2">
                Klinisch nachgewiesene Behandlungen, diskret zu Ihnen nach Hause geliefert.
              </p>
            </div>
            <Button
              size="lg"
              className="md:w-auto"
            >
              Jetzt starten →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
