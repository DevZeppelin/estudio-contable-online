import Container from "@/components/Container";
import { SITE } from "@/lib/seo";

const mapQuery = encodeURIComponent(
  `${SITE.streetAddress}, ${SITE.addressLocality}, ${SITE.addressRegion}, Argentina`,
);

const contacts = [
  {
    icon: "📍",
    label: "Dirección",
    value: `${SITE.streetAddress}, ${SITE.addressLocality}, ${SITE.addressRegion} (${SITE.postalCode})`,
  },
  {
    icon: "📞",
    label: "Teléfono / WhatsApp",
    value: SITE.phoneDisplay,
    href: `tel:${SITE.phoneE164}`,
  },
  {
    icon: "✉️",
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
  },
];

export default function Ubicacion() {
  return (
    <section id="ubicacion">
      <Container className="py-12 sm:py-16">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="section-label mb-2.5 text-[11px]">
            Dónde atendemos
          </span>
          <h2 className="mb-3 text-[clamp(20px,4vw,34px)] font-extrabold leading-tight text-azul">
            Estudio Contable en Mendoza — Ubicación
          </h2>
          <p className="mx-auto max-w-[540px] text-base text-muted">
            Atención presencial en Guaymallén y online para toda la provincia
            de Mendoza.
          </p>
        </div>

        <div className="grid items-start gap-7 md:grid-cols-[1fr_1.4fr] md:gap-10">
          <div className="reveal-item overflow-hidden rounded-xl border border-border shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
            <iframe
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              title="Ubicación del Estudio Contable en Mendoza — Dr. Darío Vallinas"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-[260px] w-full border-0 md:h-[320px]"
            />
          </div>

          <div className="flex flex-col gap-4">
            {contacts.map((c) => (
              <div key={c.label} className="flex items-start gap-3.5">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-border bg-light text-lg"
                  aria-hidden="true"
                >
                  {c.icon}
                </div>
                <div>
                  <strong className="mb-0.5 block text-[13px] font-bold uppercase tracking-[0.5px] text-muted">
                    {c.label}
                  </strong>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-[15px] font-semibold text-celeste hover:underline"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="text-[15px] font-semibold text-azul">
                      {c.value}
                    </span>
                  )}
                </div>
              </div>
            ))}

            <div className="rounded-xl border border-border bg-light p-[18px]">
              <h4 className="mb-3 text-[13px] font-bold uppercase tracking-[0.5px] text-muted">
                Horario de atención
              </h4>
              <div className="flex justify-between border-b border-border py-[7px] text-sm">
                <span>Lunes a Viernes</span>
                <span className="font-semibold text-[#16a34a]">
                  9:00 – 18:00 hs
                </span>
              </div>
              <div className="flex justify-between border-b border-border py-[7px] text-sm">
                <span>Sábados</span>
                <span className="text-muted">Cerrado</span>
              </div>
              <div className="flex justify-between py-[7px] text-sm">
                <span>Domingos</span>
                <span className="text-muted">Cerrado</span>
              </div>
            </div>

            <a
              href={SITE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green w-full"
            >
              💬 Consultar por WhatsApp
            </a>
            <a href="#reservar" className="btn w-full">
              📅 Agendar reunión orientativa sin cargo
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
