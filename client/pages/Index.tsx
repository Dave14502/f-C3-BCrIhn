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
            Starte dein Quiz
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Beantworte ein paar schnelle Fragen, und lass dich mit einem Arzt verbinden.
          </p>
          <div className="bg-secondary rounded-lg p-12 border border-border">
            <p className="text-muted-foreground mb-4">
              Quiz-Funktionalität wird hier implementiert
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
