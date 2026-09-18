import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

const pains = [
  "📬 Recibiste una intimación de ARCA y no sabés qué hacer",
  "💸 Tenés una deuda acumulada con intereses y recargos",
  "🔒 ARCA te inhibió o embargó una cuenta bancaria",
  "📑 Tenés declaraciones juradas vencidas sin presentar",
  "🔄 Necesitás un plan de pago ARCA a medida",
  "📊 Querés regularizar tu situación ante ARCA antes de que escale",
];

const steps = [
  {
    title: "Relevamiento de tu situación",
    desc: "Accedemos a tu cuenta ARCA y calculamos el monto real con intereses.",
  },
  {
    title: "Evaluación de opciones",
    desc: "Plan de pago ARCA, moratoria vigente o regularización voluntaria.",
  },
  {
    title: "Gestión completa",
    desc: "Presentamos las declaraciones, adherimos al plan y te acompañamos en el proceso.",
  },
  {
    title: "Seguimiento mensual",
    desc: "Controlamos el cumplimiento del plan para que no caduque y evitás nuevas deudas.",
  },
];

export default function Arca() {
  return (
    <section
      id="arca"
      className="bg-[linear-gradient(135deg,#1e3a5f_0%,#0a1f3c_100%)] text-white"
    >
      <Container className="py-12 sm:py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="section-label mb-2.5 text-[11px] text-[#fbbf24]">
            Asesoramiento ARCA Mendoza
          </span>
          <h2 className="mb-3 text-[clamp(20px,4vw,34px)] font-extrabold leading-tight">
            ¿Tenés una deuda o intimación de ARCA en Mendoza?
          </h2>
          <p className="mx-auto max-w-[540px] text-base text-white/70">
            Te asesoramos y regularizamos tu situación ante ARCA (ex-AFIP) en
            Mendoza. Sin vueltas.
          </p>
        </div>

        <div className="grid items-start gap-7 md:grid-cols-2 md:gap-10">
          <div>
            <div className="mb-6 flex items-start gap-2.5 rounded-xl border border-[rgba(220,38,38,0.4)] bg-[rgba(220,38,38,0.15)] px-5 py-4 text-sm">
              <span className="shrink-0 text-xl" aria-hidden="true">
                ⚠️
              </span>
              <span>
                Una deuda con ARCA crece con intereses y puede derivar en
                embargo. Cuanto antes lo atendés, mejor el resultado.
              </span>
            </div>

            <ul className="mb-6 flex flex-col gap-2.5">
              {pains.map((p) => (
                <li
                  key={p}
                  className="reveal-item rounded-lg border-l-[3px] border-[#fbbf24] bg-white/[0.07] px-3.5 py-3 text-sm text-white/90"
                >
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-2.5">
              <a
                href={SITE.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-green w-full"
              >
                💬 Consultar por deuda ARCA
              </a>
              <a href="#reservar" className="btn btn-ghost w-full">
                📅 Reunión sin cargo — Analizamos tu caso
              </a>
            </div>
          </div>

          <div className="reveal-item rounded-xl border border-white/[0.12] bg-white/[0.07] p-6">
            <h3 className="mb-4 text-base font-bold text-[#a5c8ff]">
              Cómo resolvemos tu situación ante ARCA Mendoza
            </h3>

            {steps.map((s, i) => (
              <div key={s.title} className="mb-4 flex items-start gap-3.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-celeste text-xs font-extrabold text-white">
                  {i + 1}
                </div>
                <div>
                  <strong className="mb-0.5 block text-sm">{s.title}</strong>
                  <span className="text-xs text-white/70">{s.desc}</span>
                </div>
              </div>
            ))}

            <div className="mt-5 rounded-lg border border-white/[0.12] bg-white/[0.07] p-4">
              <p className="text-[13px] leading-[1.7] text-white/80">
                <strong className="text-[#a5c8ff]">
                  {SITE.brandPerson} — {SITE.matricula}
                </strong>
                <br />
                Más de 20 años asesorando contribuyentes ante ARCA (ex-AFIP) y
                ATM Mendoza. Atención online para toda la provincia.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
