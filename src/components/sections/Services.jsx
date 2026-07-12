import Container from "@/components/Container";

const services = [
  {
    icon: "📋",
    title: "Monotributo",
    desc: "Altas, recategorizaciones y control mensual. Evitá pasarte de categoría y pagar multas innecesarias.",
  },
  {
    icon: "📊",
    title: "Responsables Inscriptos",
    desc: "IVA, Ganancias e Ingresos Brutos. Presentaciones mensuales y cumplimiento ante AFIP/ARCA.",
  },
  {
    icon: "⚖️",
    title: "Regularizaciones",
    desc: "Gestiones ante ARCA y ATM Mendoza. Análisis de deudas y planes de pago concretos.",
  },
  {
    icon: "🎯",
    title: "Asesoramiento Integral",
    desc: "Contable e impositivo, claro y práctico. Sabés qué pagás, cuándo y por qué.",
  },
  {
    icon: "🏢",
    title: "Contabilidad para PYMES",
    desc: "Orden, seguimiento y toma de decisiones. Balances, sueldos y planificación fiscal.",
  },
  {
    icon: "💬",
    title: "Consultas Puntuales",
    desc: "Acompañamiento mensual para tener siempre un contador de referencia cuando lo necesitás.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-light">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-label">Lo que hacemos</span>
          <h2 className="mt-2 text-2xl font-extrabold text-azul sm:text-3xl">
            ¿Cómo te ayuda nuestro Estudio Contable en Mendoza?
          </h2>
          <p className="mt-3 text-muted">
            No solo hacemos trámites. Te ayudamos a entender tu situación y
            tomar decisiones correctas.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="reveal-item card p-6">
              <span className="text-3xl" aria-hidden="true">
                {s.icon}
              </span>
              <h3 className="mt-3 text-base font-bold text-azul">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
