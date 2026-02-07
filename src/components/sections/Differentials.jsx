import Container from "@/components/Container";

const bullets = [
  "Hablás directamente con un contador público",
  "No derivamos tu caso a terceros",
  "Te decimos la verdad, aunque no sea lo que esperás",
  "Enfoque práctico: soluciones, no discursos",
  "Ahorro de tiempo, estrés y errores fiscales",
  "Especialistas en normativa nacional y provincial de Mendoza",
];

export default function Differentials() {
  return (
    <section id="diferencial" className=" ">
      <Container className="py-14">
        <h2 className="text-2xl font-extrabold text-azul">
          ¿Por qué elegir 100% ONLINE – Estudio Contable en Mendoza?
        </h2>
        <p className="mt-3 max-w-3xl text-muted">
          👉 Nuestro objetivo es que te quedes tranquilo y tengas claridad.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {bullets.map((b) => (
            <div
              key={b}
              className="flex items-start gap-3 rounded-2xl border border-celeste  p-5 shadow-soft"
            >
              <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-xl  text-bg">
                ✓
              </span>
              <p className="text-base text-text">{b}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
