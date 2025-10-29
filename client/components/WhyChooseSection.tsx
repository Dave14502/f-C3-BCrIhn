import { Button } from "@/components/ui/button";
import { Shield, Zap, Lock, Users } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: "Diskret & digital",
    description: "Alle Schritte finden online statt – anonym, sicher und bequem.",
  },
  {
    icon: <Lock className="w-12 h-12 text-primary" />,
    title: "Ärztlich geprüft & legal",
    description: "fürihn™ arbeitet ausschließlich mit in der EU zugelassenen Ärzten und Apotheken.",
  },
  {
    icon: <Zap className="w-12 h-12 text-primary" />,
    title: "Schneller Ablauf",
    description: "Von der Anfrage bis zur Lieferung meist innerhalb weniger Werktage.",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "Flexibel & transparent",
    description: "Einmalige Behandlung oder regelmäßige Betreuung – du entscheidest.",
  },
];

export default function ValuePropositionSection() {
  return (
    <section className="bg-secondary py-16 md:py-24 border-t border-border">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Warum fürihn™ überzeugt
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 border border-border hover:border-primary transition space-y-4"
            >
              <div>{feature.icon}</div>
              <h3 className="text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
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
            Jetzt anonym starten
          </Button>
        </div>
      </div>
    </section>
  );
}
