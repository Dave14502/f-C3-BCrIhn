import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Headline */}
          <div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-4">
              Wenn dein Körper nicht mitspielt.
            </h1>
            <p className="text-lg md:text-2xl text-primary font-semibold">
              fürihn™ — dein diskreter Online-Service für Männergesundheit.
            </p>
          </div>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-muted-foreground">
            Kein Wartezimmer. Kein peinliches Gespräch. Nur echte ärztliche
            Unterstützung.
          </p>

          {/* Supporting Quote */}
          <div className="bg-secondary rounded-lg p-6 md:p-8 border border-border space-y-2 max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-foreground font-semibold">
              Jeder dritte Mann unter 35 kennt das Gefühl.
            </p>
            <p className="text-base md:text-lg text-foreground font-semibold">
              Du bist nicht allein – und du bist nicht kaputt.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-background font-semibold px-8 py-6 rounded-lg text-lg"
              onClick={() => {
                window.open("https://tally.so/r/mVRz7a", "_blank");
              }}
            >
              Jetzt anonym starten
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
