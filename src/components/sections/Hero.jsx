import Container from "@/components/Container";

const benefits = [
  "Atención directa con contador público",
  "100% online, sin moverte de tu casa u oficina",
  "Explicaciones claras, sin palabras técnicas",
  "Para monotributistas, responsables inscriptos y empresas",
  "Atención en toda la provincia de Mendoza",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-pastel/50 blur-3xl" />
        <div className="absolute -bottom-28 left-0 h-80 w-80 rounded-full bg-cian/20 blur-3xl" />
      </div>

      <Container className="py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-celeste bg-card px-3 py-1 text-base font-semibold text-azul">
              <span className="h-2 w-2 rounded-full bg-cian" />
              100% ONLINE – Estudio Contable en Mendoza
            </p>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-azul sm:text-5xl">
              Estudio Contable en Mendoza – Resolvé tu problema contable en una
              reunión 100% ONLINE
            </h1>

            <p className="mt-4 text-base text-muted sm:text-lg">
              ¿AFIP/ARCA, ATM, impuestos o desorden contable? Te escuchamos,
              analizamos tu caso y te explicamos qué hacer y cómo resolverlo,
              sin vueltas.
            </p>

            <ul className="mt-6 grid gap-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-base">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-md bg-pastel text-azul">
                    ✓
                  </span>
                  <span className="text-text">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#reservar"
                className="inline-flex btn items-center justify-center rounded-xl bg-cian px-5 py-3 text-base font-semibold text-bg shadow-soft hover:opacity-95"
              >
                🟢 Reservar turno ahora
              </a>
              <p className="text-base text-muted">
                👉 Elegí día y horario. La reunión es online.
              </p>
            </div>

            <p className="mt-4 text-base text-muted">
              * Reunión de 20 minutos. Información confidencial.
            </p>
          </div>

          <div className="rounded-3xl bg-white/70 backdrop-blur-md p-6 shadow-[0_12px_35px_rgba(15,23,42,0.10)]">
            <p className="text-base font-semibold tracking-wide text-[rgb(var(--azul))]">
              Reunión online · Proceso simple
            </p>

            <ol className="mt-5 space-y-3">
              <li className="flex items-start gap-4 rounded-2xl bg-white/80 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--pastel)/0.6)] text-base font-bold text-[rgb(var(--azul))]">
                  1
                </span>
                <p className="text-base text-[rgb(var(--text))]">
                  Reservás tu turno eligiendo día y horario
                </p>
              </li>

              <li className="flex items-start gap-4 rounded-2xl bg-white/80 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--pastel)/0.6)] text-base font-bold text-[rgb(var(--azul))]">
                  2
                </span>
                <p className="text-base text-[rgb(var(--text))]">
                  Analizamos tu situación en una videollamada
                </p>
              </li>

              <li className="flex items-start gap-4 rounded-2xl bg-white/80 p-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--pastel)/0.6)] text-base font-bold text-[rgb(var(--azul))]">
                  3
                </span>
                <p className="text-base text-[rgb(var(--text))]">
                  Te llevás un plan claro y accionable
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
