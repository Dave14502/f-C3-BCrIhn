import { Button } from "@/components/ui/button";

export default function ProblemAwarenessSection() {
  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Schluss mit dem peinlichen Arztbesuch
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                fürihn™ verbindet dich online mit zugelassenen Ärzten, die dir helfen, das Richtige zu finden – einfach, diskret und ohne Umwege.
              </p>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Kein Wartezimmer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Kein unangenehmes Gespräch.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Kein Papierkram.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">✓</span>
                  <span>Nur ein kurzer Online-Fragebogen, ärztliche Prüfung und – falls medizinisch geeignet – Rezept und Lieferung direkt zu dir nach Hause.</span>
                </li>
              </ul>
            </div>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-background font-semibold"
                onClick={() => {
                  document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Quiz starten →
              </Button>
            </div>
          </div>

          {/* Right: Image Placeholder */}
          <div className="order-first md:order-last">
            <div className="relative aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden flex items-center justify-center border border-border/50">
              <div className="text-center space-y-4">
                <div className="w-24 h-24 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👨</span>
                </div>
                <p className="text-muted-foreground">Moderner, diskreter Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
