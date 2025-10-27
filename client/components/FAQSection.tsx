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
    question: "Ist fürihn™ legal und sicher?",
    answer:
      "Ja. fürihn™ arbeitet ausschließlich mit zugelassenen Ärzten und registrierten EU-Apotheken. Alle medizinischen Schritte erfolgen nach geltendem Recht und unter ärztlicher Aufsicht.",
  },
  {
    id: "2",
    question: "Wie läuft das genau ab?",
    answer:
      "Du beantwortest online ein paar anonyme Fragen. Ein Arzt prüft deine Angaben und entscheidet individuell, ob eine Behandlung medizinisch sinnvoll ist. Falls ja, wird ein Rezept ausgestellt und die Apotheke versendet die Behandlung diskret zu dir.",
  },
  {
    id: "3",
    question: "Wie diskret ist die Lieferung?",
    answer:
      "Sehr diskret. Verpackung und Absender enthalten keine sensiblen Hinweise, und auch die Abbuchung auf deinem Kontoauszug ist neutral.",
  },
  {
    id: "4",
    question: "Bin ich nicht zu jung für so etwas?",
    answer:
      "Nein. Etwa ein Drittel aller Männer unter 35 erlebt gelegentlich Erektionsprobleme – häufig durch Stress, Schlafmangel oder Leistungsdruck. fürihn™ bietet dir die Möglichkeit, das Thema einfach und vertraulich ärztlich abzuklären.",
  },
  {
    id: "5",
    question: "Kann ich das jederzeit beenden oder ändern?",
    answer:
      "Ja. fürihn™ ist flexibel. Du entscheidest selbst, ob du eine einmalige Behandlung oder eine fortlaufende Betreuung möchtest – eine Kündigung ist jederzeit möglich.",
  },
  {
    id: "6",
    question: "Wer erfährt von meinen Daten?",
    answer:
      "Nur du und der behandelnde Arzt. Deine Angaben sind verschlüsselt, deine Daten werden nicht weitergegeben oder für Werbung genutzt.",
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
