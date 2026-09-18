import Container from "@/components/Container";

const services = [
  {
    icon: "📋",
    title: "Monotributistas y Autónomos",
    desc: "Inscripción, recategorización, baja y liquidación mensual. Asesoramiento ante ARCA.",
  },
  {
    icon: "🏢",
    title: "Responsables Inscriptos y PyMEs",
    desc: "IVA, Ganancias e Ingresos Brutos. Planificación fiscal y optimización impositiva.",
  },
  {
    icon: "👥",
    title: "Liquidación de Sueldos",
    desc: "Recibos, cargas sociales, F931 y asesoramiento laboral para empleadores mendocinos.",
  },
  {
    icon: "📊",
    title: "Balances y Certificaciones",
    desc: "Estados financieros anuales, certificaciones contables, licitaciones y créditos.",
  },
  {
    icon: "🏛️",
    title: "Constitución de Sociedades",
    desc: "SAS, SRL y SA en Mendoza. Asesoramiento jurídico-contable desde el inicio.",
  },
  {
    icon: "🗺️",
    title: "Convenio Multilateral",
    desc: "Alta, mantenimiento y cumplimiento para actividades en más de una provincia.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-light">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="section-label mb-2.5 text-[11px]">
            Servicios contables
          </span>
          <h2 className="mb-3 text-[clamp(20px,4vw,34px)] font-extrabold leading-tight text-azul">
            ¿Qué hace nuestro estudio contable en Mendoza?
          </h2>
          <p className="mx-auto max-w-[540px] text-base text-muted">
            Servicios para monotributistas, autónomos, responsables inscriptos y
            empresas en Mendoza.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
          {services.map((s) => (
            <article key={s.title} className="reveal-item card p-[22px]">
              <div className="mb-3 text-[28px]" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="mb-[7px] text-[15px] font-bold text-azul">
                {s.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted">{s.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
