import Container from "@/components/Container";

const steps = [
  {
    title: "Contacto sin cargo",
    desc: "WhatsApp o reunión orientativa. Sin compromiso.",
  },
  {
    title: "Análisis de tu situación",
    desc: "Evaluamos impuestos, deudas y obligaciones.",
  },
  {
    title: "Propuesta a medida",
    desc: "Honorario claro y transparente desde el inicio.",
  },
  {
    title: "Empezamos a trabajar",
    desc: "Nos ocupamos de todo. Vos seguís con tu negocio.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-light">
      <Container className="py-10">
        <div className="grid gap-5 text-center sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="reveal-item">
              <div className="mx-auto mb-3 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-celeste text-[17px] font-extrabold text-white">
                {i + 1}
              </div>
              <h3 className="mb-1 text-sm font-bold text-azul">{s.title}</h3>
              <p className="text-[13px] text-muted">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
