import Container from "@/components/Container";

const steps = [
  {
    title: "Primer contacto",
    desc: "Coordinamos por WhatsApp o agendás directamente en el calendario",
  },
  {
    title: "Analizamos tu situación",
    desc: "Reunión online o presencial para entender tu caso con detalle",
  },
  {
    title: "Plan claro y concreto",
    desc: "Salís con pasos definidos para ordenar y optimizar tu situación fiscal",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-light">
      <Container className="py-12">
        <div className="grid gap-6 text-center sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal-item">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-celeste text-lg font-extrabold text-white shadow-[0_6px_18px_rgba(37,99,235,0.35)]">
                {i + 1}
              </div>
              <h3 className="text-[15px] font-bold text-azul">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-[13px] text-muted">
          Ideal para: Monotributistas · Responsables inscriptos · Emprendedores
          · PYMES
        </p>
      </Container>
    </section>
  );
}
