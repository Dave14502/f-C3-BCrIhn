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
    question: "What can I expect when I take erectile dysfunction tablets?",
    answer:
      "When you take ED tablets, you can expect stronger and longer-lasting erections. Sildenafil typically takes effect within 1 hour and lasts up to 4 hours. Tadalafil works within 30 minutes and can last up to 36 hours. These medications work by increasing blood flow to the penis during sexual stimulation.",
  },
  {
    id: "2",
    question: "Which erectile dysfunction treatment should I use?",
    answer:
      "The best ED treatment depends on your lifestyle and preferences. Sildenafil (Viagra) is taken on-demand before sex. Tadalafil (Cialis) is also on-demand but lasts longer. Tadalafil Daily is taken every day for continuous support. Our clinicians can help you choose the right option.",
  },
  {
    id: "3",
    question: "Are ED tablets safe to use long term?",
    answer:
      "Yes, ED tablets are safe for long-term use when prescribed and monitored by healthcare professionals. Millions of men worldwide have safely used these treatments for extended periods. However, it's important to have regular check-ups with your healthcare provider.",
  },
  {
    id: "4",
    question: "What side effects do ED medications have?",
    answer:
      "Common side effects may include headache, flushing, indigestion, and nasal congestion. Most side effects are mild and temporary. Serious side effects are rare when used as directed. Always discuss any concerns with your healthcare provider.",
  },
  {
    id: "5",
    question: "Can I change my ED treatment if it's not effective?",
    answer:
      "Absolutely. If one medication isn't working well for you, our clinicians can help you try a different one. Some men respond better to different treatments, so finding the right one may take some time.",
  },
  {
    id: "6",
    question: "Why are Numan ED medications cheaper?",
    answer:
      "We offer competitive pricing on generic ED medications. Generic medications are as effective as brand-name versions but cost less because they don't have the same branding and marketing expenses.",
  },
  {
    id: "7",
    question: "Can I take ED tablets more than once a day?",
    answer:
      "No, ED tablets should not be taken more than once per day. Taking more than the recommended dose does not improve effectiveness and may increase the risk of side effects. Always follow the dosing instructions provided.",
  },
  {
    id: "8",
    question: "What doses do ED tablets come in?",
    answer:
      "Sildenafil comes in 50mg and 100mg. Tadalafil comes in 10mg and 20mg. Tadalafil Daily comes in 2.5mg and 5mg. Viagra Connect is available in 50mg. Your clinician will recommend the right dose for you.",
  },
];

export default function FAQSection() {
  return (
    <section className="bg-background py-16 md:py-24 border-t border-border">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            FAQs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Your questions answered
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
