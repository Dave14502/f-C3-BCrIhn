import { Button } from "@/components/ui/button";

export default function EmotionalCloserSection() {
  return (
    <section className="bg-primary py-20 md:py-32 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-background leading-tight">
            Warum jetzt handeln?
          </h2>

          <div className="space-y-6 text-lg text-background/90 max-w-2xl mx-auto">
            <p>
              Erektionsprobleme sind nichts Ungewöhnliches – und oft leichter ansprechbar, als viele denken.
            </p>
            <p>
              fürihn™ macht den Zugang zu medizinischer Unterstützung einfacher, digital und diskret.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button
              size="lg"
              className="bg-background hover:bg-background/90 text-primary font-semibold px-8 py-6 rounded-lg text-lg"
              onClick={() => {
                window.open('https://tally.so/r/mVRz7a', '_blank');
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
