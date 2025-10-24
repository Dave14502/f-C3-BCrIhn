import Hero from "@/components/Hero";
import ProblemAwarenessSection from "@/components/ProductsSection";
import NormalizationSection from "@/components/NormalizationSection";
import ProcessSection from "@/components/ProcessSection";
import ValuePropositionSection from "@/components/WhyChooseSection";
import MedicalCredibilitySection from "@/components/MedicalCredibilitySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PrivacySafetySection from "@/components/PrivacySafetySection";
import FAQSection from "@/components/FAQSection";
import EmotionalCloserSection from "@/components/EmotionalCloserSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemAwarenessSection />
      <NormalizationSection />
      <ProcessSection />
      <ValuePropositionSection />
      <MedicalCredibilitySection />
      <TestimonialsSection />
      <PrivacySafetySection />
      <FAQSection />
      <EmotionalCloserSection />
      
      {/* Quiz Section (Anchor) */}
      <section id="quiz" className="bg-background py-16 md:py-24 border-t border-border">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Starte jetzt
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Beantworte ein paar schnelle Fragen, und lass dich mit einem Arzt verbinden.
          </p>
          <div className="space-y-4">
            <a
              href="https://tally.so/r/mVRz7a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="bg-primary hover:bg-primary/90 text-background font-semibold px-8 py-3 rounded-lg text-lg">
                Start your journey
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
