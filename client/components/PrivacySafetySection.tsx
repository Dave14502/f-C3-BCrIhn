import { Shield, Lock, Eye, RotateCcw } from "lucide-react";

interface SafetyItem {
  icon: React.ReactNode;
  title: string;
}

const safetyItems: SafetyItem[] = [
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Ärztliche Prüfung online",
  },
  {
    icon: <Lock className="w-8 h-8 text-primary" />,
    title: "Verschlüsselte Datenübertragung",
  },
  {
    icon: <Eye className="w-8 h-8 text-primary" />,
    title: "Neutrale Abbuchung",
  },
  {
    icon: <RotateCcw className="w-8 h-8 text-primary" />,
    title: "Jederzeit kündbar",
  },
];

export default function PrivacySafetySection() {
  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Datenschutz & Diskretion
          </h2>
        </div>

        {/* Safety Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {safetyItems.map((item, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg p-8 border border-border flex flex-col items-center text-center space-y-4"
            >
              <div>{item.icon}</div>
              <p className="font-semibold text-foreground">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Text */}
        <div className="text-center">
          <p className="text-xl text-muted-foreground">
            fürihn™ steht für maximale Privatsphäre, ärztliche Sorgfalt und rechtssichere Abläufe.
          </p>
        </div>
      </div>
    </section>
  );
}
