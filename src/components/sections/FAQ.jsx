import Container from "@/components/Container";

const faqs = [
  {
    q: "¿Cómo es la reunión?",
    a: "Es una reunión 100% ONLINE donde analizamos tu situación y te explicamos qué hacer.",
  },
  { q: "¿Cuánto dura?", a: "15 minutos." },
  {
    q: "¿Tengo que llevar algo?",
    a: "Si tenés datos o claves, mejor. Si no, lo vemos en la reunión.",
  },
  {
    q: "¿Después de la reunión tengo que contratar el servicio?",
    a: "No. Primero entendés tu situación y luego decidís.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className=" ">
      <Container className="py-14">
        <h2 className="text-2xl font-extrabold text-azul">
          Preguntas frecuentes
        </h2>

        <div className="mt-8 grid gap-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-celeste  p-5 shadow-soft"
            >
              <summary className="cursor-pointer list-none text-sm font-semibold text-azul">
                {f.q}
                <span className="float-right text-muted group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <p className="mt-3 text-sm text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
