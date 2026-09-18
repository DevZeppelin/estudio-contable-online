import Container from "./Container";
import { SITE } from "@/lib/seo";

/*
  Footer con NAP completo (nombre, dirección, teléfono).
  Debe coincidir EXACTAMENTE con la ficha de Google Business Profile:
  Av. Bandera de los Andes 3170, Guaymallén, Mendoza
*/
const servicios = [
  { label: "Monotributistas y Autónomos", href: "#servicios" },
  { label: "Responsables Inscriptos", href: "#servicios" },
  { label: "Liquidación de Sueldos", href: "#servicios" },
  { label: "Balances", href: "#servicios" },
  { label: "Asesoramiento ARCA", href: "#arca" },
  { label: "Constitución de Sociedades", href: "#servicios" },
];

export default function Footer() {
  return (
    <footer className="bg-azul text-white">
      <Container className="pt-12 pb-0">
        <div className="grid gap-7 min-[641px]:grid-cols-[1.6fr_1fr_1fr] min-[641px]:gap-9">
          {/* Marca + NAP */}
          <div>
            <h2 className="mb-2 text-[15px] font-bold">
              Estudio Contable en Mendoza — {SITE.brandPerson}
            </h2>
            <p className="mb-4 text-[13px] leading-[1.65] text-white/70">
              Contador Público Matriculado en el Consejo Profesional de Ciencias
              Económicas de Mendoza. {SITE.matricula} Atención directa, sin
              intermediarios.
            </p>

            <address className="flex flex-col gap-2 text-[13px] not-italic text-white/80">
              <p className="flex items-start gap-2">
                <span aria-hidden="true">📍</span>
                <span>
                  {SITE.streetAddress}, {SITE.addressLocality},{" "}
                  {SITE.addressRegion} ({SITE.postalCode})
                </span>
              </p>
              <p className="flex items-start gap-2">
                <span aria-hidden="true">📞</span>
                <a
                  href={`tel:${SITE.phoneE164}`}
                  className="transition hover:text-white hover:underline"
                >
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span aria-hidden="true">✉️</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-white hover:underline"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span aria-hidden="true">🕗</span>
                <span>{SITE.openingHours}</span>
              </p>
            </address>

            <div className="mt-[18px] border-t border-white/10 pt-3.5">
              <p className="text-[11px] leading-relaxed text-white/45">
                Contador Público matriculado y habilitado. {SITE.matricula} —
                Consejo Profesional de Ciencias Económicas de Mendoza.
              </p>
            </div>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios" className="text-[13px]">
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[1.5px] text-white/50">
              Servicios
            </h3>
            <ul className="flex flex-col gap-[7px] text-white/70">
              {servicios.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="transition hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="text-[13px]">
            <h3 className="mb-3 text-[11px] font-bold uppercase tracking-[1.5px] text-white/50">
              Contacto
            </h3>
            <ul className="flex flex-col gap-[7px] text-white/70">
              <li>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-white"
                >
                  Email
                </a>
              </li>
              <li>
                <a href="#reservar" className="transition hover:text-white">
                  Agendar reunión
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="transition hover:text-white">
                  Cómo llegar
                </a>
              </li>
              <li>
                <a
                  href="https://www.contador-en-mendoza.com.ar"
                  className="transition hover:text-white"
                >
                  contador-en-mendoza.com.ar
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-1.5 border-t border-white/10 py-[18px] text-[11px] text-white/50">
          <span>
            © 2026 Estudio Contable en Mendoza · {SITE.brandPerson} ·{" "}
            {SITE.matricula}
          </span>
          <span>
            Desarrollado por{" "}
            <a
              href="https://devzeppelin.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:underline"
            >
              DevZeppelin
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
