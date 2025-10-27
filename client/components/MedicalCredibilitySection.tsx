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
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-primary/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F29271f19638b45b0980662fdd6c70134%2F5f84066aaf614f5dbd166ca345bf783b?format=webp&width=800"
                  alt="Dr. Lukas Hahn"
                  className="w-full h-full object-cover"
                />
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
