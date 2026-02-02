import Container from "@/components/Container";

const testimonials = [
  {
    quote:
      "Tenía miedo por una deuda con AFIP y en la reunión me explicaron todo claro. Salí con un plan concreto.",
    author: "Cliente de Mendoza",
  },
  {
    quote: "No entendía nada de mis impuestos. Ahora sé cuánto pago y por qué.",
    author: "Emprendedor mendocino",
  },
  {
    quote: "La atención online me ahorró tiempo y problemas.",
    author: "PYME – Mendoza",
  },
];

export default function Testimonials() {
  return (
    <section id="opiniones" className=" ">
      <Container className="py-14">
        <h2 className="text-2xl font-extrabold text-azul">
          Lo que dicen nuestros clientes
        </h2>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-celeste  p-6 shadow-soft"
            >
              <blockquote className="text-sm text-text">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-azul">
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
