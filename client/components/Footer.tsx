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
              fürihn™ ist ein digitaler Gesundheitsservice, der Männer anonym mit zugelassenen Ärzten und Apotheken verbindet.
            </p>
            <p>
              Alle Behandlungen erfolgen ausschließlich nach ärztlicher Prüfung und Rezept.
            </p>
            <p>
              fürihn™ ersetzt keine persönliche Untersuchung beim Arzt, sondern bietet eine telemedizinische Ergänzung.
            </p>
          </div>

          {/* Copyright */}
          <div className="border-t border-border pt-8">
            <p className="text-xs text-muted-foreground">
              © {currentYear} fürihn Health GmbH – Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
