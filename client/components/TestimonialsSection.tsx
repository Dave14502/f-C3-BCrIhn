import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  name: string;
  age: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Ich wollte das Thema nie ansprechen – online war das endlich unkompliziert.",
    name: "Max",
    age: 29,
  },
  {
    quote:
      "fürihn hat mir gezeigt, dass es seriös und diskret möglich ist, Hilfe zu bekommen.",
    name: "Leon",
    age: 31,
  },
  {
    quote:
      "Das Formular ausgefüllt, Arzt hat geprüft, Lieferung kam neutral verpackt. Einfach und professionell.",
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
            Stimmen aus der Community
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
              window.open("https://tally.so/r/mVRz7a", "_blank");
            }}
          >
            Jetzt anonym starten
          </Button>
        </div>
      </div>
    </section>
  );
}
