import Container from "@/components/Container";
import CalendlyPopupButton from "@/components/CalendlyPopupButton";

export default function Hero() {
  const whatsappUrl = "https://wa.me/542615740182";
  const calendlyUrl =
    "https://calendly.com/contador-publico-matriculado-mendoza";

  return (
    <section className="relative overflow-hidden">
      {/* Fondo suave */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-28 right-0 h-80 w-80 rounded-full bg-[rgb(var(--pastel)/0.55)] blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-[rgb(var(--cian)/0.18)] blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent" />
      </div>

      <Container className="py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Columna izquierda */}
          <div>
            {/* Mini Badge Autoridad */}
            <a
              href="https://www.google.com/search?q=estudio+contable+mendoza+reseñas"
              target="_blank"
              rel="noopener noreferrer"
              className="
    inline-flex items-center gap-2
    rounded-full bg-white/80 backdrop-blur-md
    px-4 py-1.5
    text-sm font-semibold
    text-[rgb(var(--azul))]
    shadow-[0_6px_18px_rgba(15,23,42,0.10)]
    transition hover:opacity-90 mb-4
  "
            >
              <span className="text-[rgb(var(--cian))]">★★★★★</span>
              <span>4.9 en Google</span>
            </a>
            {/* H1 */}
            <h1 className="text-4xl font-extrabold tracking-tight text-[rgb(var(--azul))] sm:text-6xl">
              Estudio Contable en Mendoza
              <span className="mt-2 block text-2xl font-bold text-[rgb(var(--azul))] sm:text-3xl">
                Asesoramiento Profesional con Contador Matriculado
              </span>
            </h1>

            {/* Línea de autoridad */}
            <div className="mt-5 rounded-3xl bg-white/60 backdrop-blur-md p-5 shadow-[0_10px_25px_rgba(15,23,42,0.10)]">
              <p className="text-base font-extrabold text-[rgb(var(--azul))]">
                C.P. Darío Vallinas
              </p>

              <p className="mt-1 text-base leading-relaxed text-[rgb(var(--muted))]">
                Contador Público Matriculado en Mendoza. Consejo Profesional de
                Ciencias Económicas de Mendoza. C.P.C.E.M.D.Z
              </p>

              <p className="mt-3 text-base leading-relaxed text-[rgb(var(--muted))]">
                Brindo asesoramiento contable personalizado para profesionales,
                emprendedores y PYMES de Mendoza. Mi objetivo es que entiendas
                tu situación fiscal y tomes decisiones con tranquilidad.
              </p>

              <div className="mt-4 grid gap-2 text-base">
                {[
                  "Contador matriculado en el C.P.C.E.M.D.Z.",
                  "Atención ONLINE y PRESENCIAL",
                  "Soluciones para AFIP, cuentas, impuestos, PYMES y monotributistas",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-[rgb(var(--pastel)/0.6)] text-[rgb(var(--azul))]">
                      ✓
                    </span>
                    <span className="text-[rgb(var(--text))]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA doble */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Principal WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex w-full items-center justify-center gap-3
                  rounded-2xl px-6 py-4
                  text-lg font-semibold text-white
                  bg-[linear-gradient(135deg,rgb(var(--cian)),rgb(var(--celeste)))]
                  shadow-[0_14px_35px_rgba(15,23,42,0.25)]
                  transition hover:opacity-95 hover:-translate-y-0.5
                  sm:w-auto
                "
              >
                ✔️ Hablar por WhatsApp ahora
              </a>

              {/* Secundario Calendly */}
              <a
                href="#reservar"
                className="inline-flex btn items-center justify-center rounded-xl  px-5 py-3 text-base font-semibold text-bg shadow-soft hover:opacity-95"
              >
                🟢 Agendar reunión orientativa sin cargo
              </a>
            </div>

            {/* Nota pequeña */}
            <p className="mt-3 text-sm text-[rgb(var(--muted))]">
              20 minutos – Online o Presencial – Confidencial – Sin compromiso
            </p>
          </div>

          {/* Columna derecha: Proceso simple */}
          <div className="rounded-3xl bg-white/70 backdrop-blur-md p-6 shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
            <p className="text-base font-semibold tracking-wide text-[rgb(var(--azul))]">
              Reunión · Proceso simple
            </p>

            <ol className="mt-5 space-y-3">
              <li className="flex items-start gap-4 rounded-2xl bg-white/80 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--pastel)/0.6)] text-base font-bold text-[rgb(var(--azul))]">
                  1
                </span>
                <p className="text-base text-[rgb(var(--text))]">
                  Coordinamos el contacto (WhatsApp o agenda)
                </p>
              </li>

              <li className="flex items-start gap-4 rounded-2xl bg-white/80 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--pastel)/0.6)] text-base font-bold text-[rgb(var(--azul))]">
                  2
                </span>
                <p className="text-base text-[rgb(var(--text))]">
                  Analizamos tu situación online o presencial
                </p>
              </li>

              <li className="flex items-start gap-4 rounded-2xl bg-white/80 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--pastel)/0.6)] text-base font-bold text-[rgb(var(--azul))]">
                  3
                </span>
                <p className="text-base text-[rgb(var(--text))]">
                  Te llevás un plan claro para ordenar y optimizar
                </p>
              </li>
            </ol>

            <div className="mt-6 rounded-2xl bg-[rgb(var(--pastel)/0.45)] p-4">
              <p className="text-base font-semibold uppercase tracking-wide text-[rgb(var(--azul))]">
                Ideal para
              </p>
              <p className="mt-1 text-base text-[rgb(var(--text))]">
                Monotributistas · Responsables inscriptos · Emprendedores ·
                PYMES
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
