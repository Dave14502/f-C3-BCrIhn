import { Button } from "@/components/ui/button";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: "Online-Fragebogen (2 Minuten)",
    description: "Beantworte anonyme Fragen – kein Video-Call, kein persönliches Gespräch nötig.",
  },
  {
    number: 2,
    title: "Ärztliche Prüfung",
    description: "Ein zugelassener Arzt prüft deine Angaben und entscheidet individuell, ob eine Behandlung medizinisch sinnvoll ist.",
  },
  {
    number: 3,
    title: "Rezept & Versand über Partnerapotheke",
    description: "Falls angezeigt, stellt der Arzt ein Rezept aus. Unsere registrierte Partnerapotheke versendet die Behandlung diskret verpackt direkt zu dir.",
  },
  {
    number: 4,
    title: "Betreuung & Folgerezept (optional)",
    description: "fürihn™ erinnert dich an Folgerezepte und hilft dir, deine Behandlung flexibel zu gestalten.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            So funktioniert fürihn™
          </h2>
          <p className="text-xl text-muted-foreground">
            In vier einfachen Schritten – von der Beratung bis zur diskreten Lieferung.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-secondary rounded-lg p-8 border border-border hover:border-primary transition space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary text-background flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-background font-semibold"
            onClick={() => {
              window.open('https://tally.so/r/mVRz7a', '_blank');
            }}
          >
            Na klar
          </Button>
        </div>
      </div>
    </section>
  );
}
