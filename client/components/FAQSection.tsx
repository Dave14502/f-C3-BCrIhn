import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "1",
    question: "Ist fürihn™ legal?",
    answer:
      "Ja. fürihn™ vermittelt ausschließlich zugelassene Ärzte und Apotheken innerhalb der EU und erfüllt alle gesetzlichen Anforderungen.",
  },
  {
    id: "2",
    question: "Ist fürihn™ selbst eine Apotheke?",
    answer:
      "Nein. fürihn™ ist ein Telehealth-Service, der den Kontakt zu Ärzten und Apotheken digital ermöglicht.",
  },
  {
    id: "3",
    question: "Wie läuft die Bezahlung?",
    answer:
      "Die Zahlung erfolgt über eine neutrale Abrechnung – auf deinem Kontoauszug erscheint kein sensibler Hinweis.",
  },
  {
    id: "4",
    question: "Was passiert nach dem Start?",
    answer:
      "Ein Arzt prüft deine Angaben und entscheidet individuell, ob eine Behandlung medizinisch angezeigt ist. Bei Eignung erhältst du das Rezept und die Lieferung über unsere Partnerapotheke.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-secondary py-16 md:py-24 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Häufige Fragen
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4 mb-12">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-border rounded-lg px-6 bg-background data-[state=open]:bg-card"
            >
              <AccordionTrigger className="py-4 text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-background font-semibold"
            onClick={() => {
              window.open('https://tally.so/r/mVRz7a', '_blank');
            }}
          >
            Starte jetzt
          </Button>
        </div>
      </div>
    </section>
  );
}
