import Container from "@/components/Container";

const services = [
  {
    title: "Monotributo",
    desc: "Altas, recategorizaciones y control mensual.",
  },
  {
    title: "Responsables inscriptos",
    desc: "IVA, Ganancias e Ingresos Brutos.",
  },
  { title: "Regularizaciones", desc: "Gestiones ante ARCA y ATM Mendoza." },
  {
    title: "Asesoramiento integral",
    desc: "Contable e impositivo, claro y práctico.",
  },
  {
    title: "Contabilidad para PYMES",
    desc: "Orden, seguimiento y decisiones.",
  },
  {
    title: "Consultas puntuales",
    desc: "Acompañamiento mensual si lo necesitás.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className=" ">
      <Container className="py-14">
        <h2 className="text-2xl font-extrabold text-azul">
          ¿Cómo te ayudamos desde nuestro Estudio Contable?
        </h2>
        <p className="mt-3 max-w-3xl text-muted">
          No solo hacemos trámites. Te ayudamos a entender tu situación y tomar
          decisiones correctas.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="rounded-2xl border border-celeste  p-6 shadow-soft"
            >
              <h3 className="text-base font-semibold text-azul">{s.title}</h3>
              <p className="mt-2 text-base text-muted">{s.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
