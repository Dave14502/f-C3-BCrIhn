export default function Impressum() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-16 space-y-8">
      <h1 className="text-4xl font-bold text-primary mb-8">Impressum</h1>

      {/* Angaben gemäß § 5 TMG */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Angaben gemäß § 5 TMG</h2>
        <div className="text-foreground leading-relaxed">
          <p>David Stötzel</p>
          <p>Holzweg 14</p>
          <p>79194 Heuweiler</p>
          <p>Deutschland</p>
        </div>
      </section>

      {/* Kontakt */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Kontakt</h2>
        <div className="text-foreground leading-relaxed">
          <p>
            <strong>E-Mail:</strong>{" "}
            <a href="mailto:contact@davidstoetzel.com" className="text-primary hover:underline">
              contact@davidstoetzel.com
            </a>
          </p>
          <p>
            <strong>Telefon:</strong>{" "}
            <a href="tel:+49151 26938803" className="text-primary hover:underline">
              +49 (0)151 26938803
            </a>
          </p>
        </div>
      </section>

      {/* Verantwortlich für den Inhalt */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <div className="text-foreground leading-relaxed">
          <p>David Stötzel</p>
          <p className="text-sm text-muted-foreground">(Anschrift wie oben)</p>
        </div>
      </section>

      {/* Projektbeschreibung */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Projektbeschreibung</h2>
        <div className="text-foreground space-y-3 leading-relaxed">
          <p>
            fürihn ist ein Informations- und Aufklärungsprojekt zum Thema Männergesundheit.
          </p>
          <p>
            Die Website dient ausschließlich der Bereitstellung allgemeiner, nicht-medizinischer Informationen sowie der anonymen Erfassung von Interessensdaten im Rahmen eines Pre-Launch-Tests.
          </p>
          <p>
            Es werden keine medizinischen Leistungen angeboten und keine Diagnosen oder Behandlungen durchgeführt.
          </p>
          <p>
            Bei gesundheitlichen Beschwerden sollte stets ein Arzt oder eine Ärztin konsultiert werden.
          </p>
        </div>
      </section>

      {/* Haftung für Inhalte */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Haftung für Inhalte</h2>
        <div className="text-foreground space-y-3 leading-relaxed">
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>
          <p>
            Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          </p>
          <p>
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
          </p>
          <p>
            Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
          </p>
        </div>
      </section>

      {/* Haftung für Links */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Haftung für Links</h2>
        <div className="text-foreground space-y-3 leading-relaxed">
          <p>
            Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe.
          </p>
          <p>
            Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen.
          </p>
          <p>
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
          <p>
            Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          </p>
          <p>
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
          </p>
          <p>
            Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Links umgehend entfernen.
          </p>
        </div>
      </section>

      {/* Urheberrecht */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">Urheberrecht</h2>
        <div className="text-foreground space-y-3 leading-relaxed">
          <p>
            Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          </p>
          <p>
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          </p>
          <p>
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
          </p>
          <p>
            Solltest du trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitte ich um einen entsprechenden Hinweis.
          </p>
          <p>
            Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </section>

      {/* Haftungsausschluss */}
      <section className="space-y-4 pb-8">
        <h2 className="text-2xl font-semibold text-foreground">Haftungsausschluss (Disclaimer)</h2>
        <div className="text-foreground space-y-3 leading-relaxed">
          <p>
            Die bereitgestellten Inhalte stellen keine medizinische Beratung dar.
          </p>
          <p>
            Alle Informationen dienen ausschließlich der allgemeinen Aufklärung und ersetzen keine ärztliche Untersuchung, Diagnose oder Behandlung.
          </p>
          <p>
            Die Nutzung dieser Website erfolgt auf eigene Verantwortung.
          </p>
        </div>
      </section>
    </div>
  );
}
