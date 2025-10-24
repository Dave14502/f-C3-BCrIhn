import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: "1",
    question: "Was kann ich erwarten, wenn ich Erektionsstörungstabletten nehme?",
    answer:
      "Wenn Sie ED-Tabletten nehmen, können Sie mit stärkeren und länger andauernden Erektionen rechnen. Sildenafil wirkt typischerweise innerhalb von 1 Stunde und hält bis zu 4 Stunden. Tadalafil wirkt innerhalb von 30 Minuten und kann bis zu 36 Stunden anhalten. Diese Medikamente funktionieren, indem sie die Blutversorgung des Penis während der sexuellen Stimulation erhöhen.",
  },
  {
    id: "2",
    question: "Welche Erektionsstörungsbehandlung sollte ich verwenden?",
    answer:
      "Die beste ED-Behandlung hängt von Ihrem Lebensstil und Ihren Vorlieben ab. Sildenafil (Viagra) wird bei Bedarf vor dem Sex eingenommen. Tadalafil (Cialis) wird auch bei Bedarf eingenommen, hält aber länger. Tadalafil Daily wird täglich für kontinuierliche Unterstützung eingenommen. Unsere Kliniker können Ihnen helfen, die richtige Option zu wählen.",
  },
  {
    id: "3",
    question: "Sind ED-Tabletten sicher für die langfristige Anwendung?",
    answer:
      "Ja, ED-Tabletten sind sicher für die langfristige Anwendung, wenn sie von Gesundheitsfachleuten verschrieben und überwacht werden. Millionen von Männern weltweit haben diese Behandlungen über längere Zeiträume sicher angewendet. Es ist jedoch wichtig, regelmäßig Kontrolluntersuchungen bei Ihrem Arzt durchzuführen.",
  },
  {
    id: "4",
    question: "Welche Nebenwirkungen haben ED-Medikamente?",
    answer:
      "Häufige Nebenwirkungen können Kopfschmerzen, Hautrötungen, Magenverstimmung und Verstopfung der Nase sein. Die meisten Nebenwirkungen sind leicht und vorübergehend. Schwerwiegende Nebenwirkungen sind selten, wenn die Medikamente wie angegeben verwendet werden. Besprechen Sie alle Bedenken immer mit Ihrem Arzt.",
  },
  {
    id: "5",
    question: "Kann ich meine ED-Behandlung wechseln, wenn sie nicht wirksam ist?",
    answer:
      "Absolut. Wenn ein Medikament für Sie nicht gut wirkt, können Ihnen unsere Kliniker bei einem anderen helfen. Einige Männer sprechen besser auf verschiedene Behandlungen an, daher kann die Suche nach der richtigen einige Zeit dauern.",
  },
  {
    id: "6",
    question: "Warum sind Numan ED-Medikamente billiger?",
    answer:
      "Wir bieten wettbewerbsfähige Preise für generische ED-Medikamente. Generische Medikamente sind genauso wirksam wie Markenversionen, kosten aber weniger, da sie nicht die gleichen Branding- und Marketingausgaben haben.",
  },
  {
    id: "7",
    question: "Kann ich ED-Tabletten mehr als einmal täglich nehmen?",
    answer:
      "Nein, ED-Tabletten sollten nicht mehr als einmal pro Tag eingenommen werden. Die Einnahme einer höheren Dosis als empfohlen verbessert die Wirksamkeit nicht und kann das Risiko von Nebenwirkungen erhöhen. Befolgen Sie immer die angegebenen Dosierungsanweisungen.",
  },
  {
    id: "8",
    question: "In welchen Dosen sind ED-Tabletten erhältlich?",
    answer:
      "Sildenafil ist in 50 mg und 100 mg erhältlich. Tadalafil ist in 10 mg und 20 mg erhältlich. Tadalafil Daily ist in 2,5 mg und 5 mg erhältlich. Viagra Connect ist in 50 mg erhältlich. Ihr Kliniker empfiehlt Ihnen die richtige Dosis.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Häufig gestellte Fragen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Ihre Fragen beantwortet
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="border border-border rounded-lg px-6 data-[state=open]:bg-secondary"
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
      </div>
    </section>
  );
}
