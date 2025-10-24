import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  name: string;
  age: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Ich wollte das Thema nie ansprechen – und hab's dann einfach online gemacht. Zwei Tage später war alles geregelt.",
    name: "Max",
    age: 29,
  },
  {
    quote: "Ich hatte keine Lust auf Peinlichkeiten beim Arzt. fürihn hat mir gezeigt, wie einfach das gehen kann.",
    name: "Leon",
    age: 31,
  },
  {
    quote: "Ich hab das Quiz gemacht, der Arzt hat's geprüft – das Paket kam neutral verpackt. Ganz easy.",
    name: "Felix",
    age: 26,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-secondary py-16 md:py-24 border-t border-border">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Erfahrungen echter Nutzer
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-lg p-8 border border-border space-y-4"
            >
              <p className="text-foreground text-lg italic">
                „{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-foreground">
                  {testimonial.name}, {testimonial.age}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-background font-semibold"
            onClick={() => {
              document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Jetzt Quiz starten
          </Button>
        </div>
      </div>
    </section>
  );
}
