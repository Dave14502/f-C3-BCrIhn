import { CheckCircle, Activity, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: <Activity className="w-12 h-12 text-primary" />,
    title: "MEDIZINISCHE BEHANDLUNG",
    subtitle: "Stärkere Erektionen, besserer Sex",
    description:
      "Gewinnen Sie Ihr Selbstvertrauen mit klinisch nachgewiesenen ED-Behandlungen zu Ihnen nach Hause zurück",
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-primary" />,
    title: "DIAGNOSTIK",
    subtitle: "Untersuchen Sie das Grundproblem",
    description: "Machen Sie einen Bluttest, um die zugrunde liegende Ursache zu ermitteln",
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: "LAUFENDE UNTERSTÜTZUNG",
    subtitle: "Bekämpfen Sie die zugrunde liegende Ursache",
    description:
      "Sprechen Sie mit Fachleuten für Männergesundheit, um Ihre laufende Behandlung zu planen",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-secondary py-16 md:py-24 border-t border-border">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Warum NumAn wählen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Was wir anbieten
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 border border-border hover:border-primary transition"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-primary font-semibold mb-3">{benefit.subtitle}</p>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-border pt-12">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Expertenteam zu Ihrem Service
            </h3>
            <p className="text-muted-foreground mb-6">
              Unsere britischen Ärzte und Kliniker spezialisieren sich auf Männergesundheit und sind
              dem Ziel gewidmet, Ihnen zu besserer sexueller Gesundheit zu verhelfen.
            </p>
            <Button size="lg">
              Beginnen Sie Ihre ED-Behandlung
            </Button>
          </div>

          {/* Expert placeholder */}
          <div className="bg-card rounded-lg aspect-square flex items-center justify-center border border-border">
            <div className="text-center">
              <Users size={48} className="text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Fachleute Ärzte & Kliniker</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
