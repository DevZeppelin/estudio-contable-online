import Container from "@/components/Container";

const blocks = [
  {
    title: "Contador matriculado y respaldo profesional",
    body: "Trabajás con un contador público matriculado en el Consejo Profesional de Ciencias Económicas de Mendoza, lo que garantiza responsabilidad, actualización permanente y cumplimiento normativo.",
  },
  {
    title: "Atención personalizada y respuesta rápida",
    body: "Cada cliente recibe asesoramiento adaptado a su actividad. Respondemos consultas con claridad y te avisamos antes de cada vencimiento importante.",
  },
  {
    title: "Explicaciones claras y sin complicaciones",
    body: "Nuestro enfoque es práctico: entendés qué pagás, por qué lo pagás y cómo optimizar tu situación fiscal.",
  },
];

export default function Authority() {
  return (
    <section id="autoridad" className="bg-light">
      <Container className="py-16 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-3">
          {/* Contenido principal */}
          <div className="lg:col-span-2">
            <span className="section-label">Respaldo profesional</span>
            <h2 className="mt-2 text-2xl font-extrabold text-azul sm:text-3xl">
              Contador matriculado en Mendoza: respaldo y especialización
            </h2>

            <div className="mt-8 space-y-4">
              {blocks.slice(0, 2).map((b) => (
                <div key={b.title} className="reveal-item card p-5">
                  <h3 className="text-lg font-bold text-azul">{b.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {b.body}
                  </p>
                </div>
              ))}

              <div className="reveal-item card p-5">
                <h3 className="text-lg font-bold text-azul">
                  Especialización en monotributistas y PYMES
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  Brindamos servicios contables en Mendoza para:
                </p>
                <ul className="mt-4 grid gap-2 text-[15px] text-text sm:grid-cols-2">
                  {[
                    "Monotributistas",
                    "Responsables inscriptos",
                    "Autónomos",
                    "Empresas y PYMES",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-celeste" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">
                  Nos ocupamos de inscripción, categorización, liquidación de
                  impuestos y presentación ante ARCA.
                </p>
              </div>

              <div className="reveal-item card p-5">
                <h3 className="text-lg font-bold text-azul">
                  {blocks[2].title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {blocks[2].body}
                </p>
              </div>
            </div>
          </div>

          {/* Aside CTA */}
          <aside className="reveal-item card h-fit p-6">
            <p className="text-base font-bold text-azul">
              Reunión orientativa sin cargo
            </p>

            <ul className="mt-4 space-y-2 text-[15px] text-text">
              {[
                "20 minutos",
                "Online o Presencial",
                "Confidencial",
                "Sin compromiso",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-celeste" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#reservar" className="btn mt-6 w-full">
              Agendar reunión
            </a>

            <p className="mt-4 text-xs text-muted">
              🔒 Tu información se usa solo para coordinar la reunión.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
