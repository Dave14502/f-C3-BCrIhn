import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container max-w-7xl mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo */}
          <h2 className="text-2xl font-bold text-primary">fürihn™</h2>

          {/* Legal Disclaimer */}
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p>
              fürihn™ ist ein Informations- und Aufklärungsprojekt zum Thema Männergesundheit.
            </p>
            <p>
              Ziel ist es, Männern zukünftig einen sicheren und diskreten Zugang zu medizinischer Beratung zu ermöglichen.
            </p>
            <p>
              Aktuell befindet sich das Projekt in der Aufbau- und Testphase.
            </p>
            <p>
              Es werden keine medizinischen Leistungen angeboten und keine Medikamente abgegeben.
            </p>
            <p>
              Die Inhalte dieser Website dienen ausschließlich Informationszwecken und ersetzen keine ärztliche Untersuchung, Diagnose oder Behandlung.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-border pt-8">
            <p className="text-muted-foreground text-sm mb-4">⸻</p>
            <p className="text-xs text-muted-foreground">
              © {currentYear} fürihn — Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
