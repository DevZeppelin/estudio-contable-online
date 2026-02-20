import Container from "@/components/Container";

export default function Authority() {
  return (
    <section>
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          {/* CONTENIDO PRINCIPAL */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-[rgb(var(--azul))]">
              ¿Por qué elegir nuestro estudio contable en Mendoza?
            </h2>

            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-white/70 backdrop-blur-md p-5 shadow-[0_10px_25px_rgba(15,23,42,0.10)]">
                <h3 className="text-lg font-bold text-[rgb(var(--azul))]">
                  Contador matriculado y respaldo profesional
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[rgb(var(--muted))]">
                  Trabajás con un contador público matriculado en el Consejo
                  Profesional de Ciencias Económicas de Mendoza, lo que
                  garantiza responsabilidad, actualización permanente y
                  cumplimiento normativo.
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 backdrop-blur-md p-5 shadow-[0_10px_25px_rgba(15,23,42,0.10)]">
                <h3 className="text-lg font-bold text-[rgb(var(--azul))]">
                  Atención personalizada y respuesta rápida
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[rgb(var(--muted))]">
                  Cada cliente recibe asesoramiento adaptado a su actividad.
                  Respondemos consultas con claridad y te avisamos antes de cada
                  vencimiento importante.
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 backdrop-blur-md p-5 shadow-[0_10px_25px_rgba(15,23,42,0.10)]">
                <h3 className="text-lg font-bold text-[rgb(var(--azul))]">
                  Especialización en monotributistas y PYMES
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[rgb(var(--muted))]">
                  Brindamos servicios contables en Mendoza para:
                </p>

                <ul className="mt-4 grid gap-2 text-base text-[rgb(var(--text))] sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[rgb(var(--cian))]" />
                    Monotributistas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[rgb(var(--cian))]" />
                    Responsables inscriptos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[rgb(var(--cian))]" />
                    Autónomos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[rgb(var(--cian))]" />
                    Empresas y PYMES
                  </li>
                </ul>

                <p className="mt-4 text-base leading-relaxed text-[rgb(var(--muted))]">
                  Nos ocupamos de inscripción, categorización, liquidación de
                  impuestos y presentación ante ARCA.
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 backdrop-blur-md p-5 shadow-[0_10px_25px_rgba(15,23,42,0.10)]">
                <h3 className="text-lg font-bold text-[rgb(var(--azul))]">
                  Explicaciones claras y sin complicaciones
                </h3>
                <p className="mt-2 text-base leading-relaxed text-[rgb(var(--muted))]">
                  Nuestro enfoque es práctico: entendés qué pagás, por qué lo
                  pagás y cómo optimizar tu situación fiscal.
                </p>
              </div>
            </div>
          </div>

          {/* ASIDE CTA */}
          <aside className="h-fit rounded-3xl bg-white/70 backdrop-blur-md p-6 shadow-[0_14px_40px_rgba(15,23,42,0.12)]">
            <p className="text-base font-semibold text-[rgb(var(--azul))]">
              Reunión orientativa sin cargo
            </p>

            <ul className="mt-4 grid gap-2 text-base text-[rgb(var(--text))]">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[rgb(var(--cian))]" />
                20 minutos
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[rgb(var(--cian))]" />
                Online o Presencial
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[rgb(var(--cian))]" />
                Confidencial
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[rgb(var(--cian))]" />
                Sin compromiso
              </li>
            </ul>

            <a href="#reservar" className="btn btn-primary mt-6 w-full">
              Agendar reunión
            </a>

            <p className="mt-4 text-xs text-[rgb(var(--muted))]">
              🔒 Tu información se usa solo para coordinar la reunión.
            </p>
          </aside>
        </div>
      </Container>
    </section>
  );
}
