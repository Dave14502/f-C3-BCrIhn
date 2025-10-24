import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Headline */}
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight mb-6">
              fürihn™ — Dein diskreter Telehealth-Service für Männergesundheit
            </h1>
          </div>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground">
            Schnell, sicher und online.<br />Ärztliche Beratung, digitale Rezeptausstellung und Lieferung über registrierte Partnerapotheken.
          </p>

          {/* Supporting Quote */}
          <div className="bg-secondary rounded-lg p-8 md:p-12 border border-border space-y-3 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-foreground font-semibold">
              Du bist 28, nicht 58.
            </p>
            <p className="text-lg md:text-xl text-foreground font-semibold">
              Du bist nicht kaputt – du willst nur wieder Kontrolle.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-background font-semibold px-8 py-6 rounded-lg text-lg"
              onClick={() => {
                document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Jetzt Quiz starten
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
