import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Treatments */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Behandlungen</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Erektionsstörungen
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Gewichtsabnahme
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Niedriges Testosteron
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Haarausfall
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Diagnostik
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Unternehmen</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Karrieren
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Bewertungen
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Unterstützung</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Hilfezentrum
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Kontaktieren Sie uns
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Häufig gestellte Fragen
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Datenschutzrichtlinie
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Folgen Sie uns</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              © {currentYear} Numan. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Registriert in England und Wales, Firmennummer 11449267
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">
              Servicebedingungen
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">
              Datenschutzrichtlinie
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">
              Cookie-Richtlinie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
