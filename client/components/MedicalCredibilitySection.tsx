export default function MedicalCredibilitySection() {
  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Medizinisch begleitet. Von echten Ärzten.
          </h2>

          {/* Quote Section */}
          <div className="bg-secondary rounded-lg p-12 border border-border space-y-8">
            <blockquote className="text-2xl md:text-3xl text-foreground font-semibold italic">
              „fürihn™ ermöglicht Männern, ärztliche Beratung und Behandlung zu erhalten – ohne Scham, aber mit medizinischer Sicherheit."
            </blockquote>

            {/* Doctor Info */}
            <div className="space-y-4">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                <span className="text-4xl">👨‍⚕️</span>
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">
                  Dr. Lukas Hahn
                </p>
                <p className="text-muted-foreground">
                  Facharzt für Urologie, Berlin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
