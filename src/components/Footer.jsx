import Container from "./Container";
import { SITE } from "@/lib/seo";

/*
  Footer con NAP completo (nombre, dirección, teléfono).
  Debe coincidir EXACTAMENTE con la ficha de Google Business Profile:
  Av. Bandera de los Andes 3170, Guaymallén, Mendoza
*/
export default function Footer() {
  return (
    <footer className="bg-azul text-white">
      <Container className="pt-14 pb-0">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Marca + NAP */}
          <div>
            <h2 className="text-lg font-bold">Estudio Contable en Mendoza</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Contador Público Matriculado C.P.C.E.M.D.Z.
              <br />
              Servicios contables para monotributistas, autónomos y PYMES en
              Mendoza. Atención online y presencial.
            </p>

            <div className="mt-5 space-y-2.5 text-sm text-white/80">
              <p className="flex items-start gap-2.5">
                <span aria-hidden="true">📍</span>
                <address className="not-italic">
                  {SITE.streetAddress}, {SITE.addressLocality},{" "}
                  {SITE.addressRegion}
                </address>
              </p>
              <p className="flex items-start gap-2.5">
                <span aria-hidden="true">📱</span>
                <a
                  href={SITE.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white hover:underline"
                >
                  {SITE.phoneDisplay}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <span aria-hidden="true">✉️</span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition hover:text-white hover:underline"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="flex items-start gap-2.5">
                <span aria-hidden="true">🕐</span>
                <span>{SITE.openingHours}</span>
              </p>
            </div>
          </div>

          {/* Servicios */}
          <nav aria-label="Servicios" className="text-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
              Servicios
            </h3>
            <ul className="mt-4 space-y-2 text-white/70">
              {[
                "Monotributo",
                "Responsables Inscriptos",
                "Regularizaciones ARCA",
                "Contabilidad PYMES",
                "Asesoramiento Integral",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#servicios"
                    className="transition hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="text-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
              Contacto
            </h3>
            <ul className="mt-4 space-y-2 text-white/70">
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
                <a href="#reservar" className="transition hover:text-white">
                  Agendar reunión
                </a>
              </li>
              <li>
                <a
                  href={SITE.reviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Reseñas en Google
                </a>
              </li>
              <li>
                <a href="#faq" className="transition hover:text-white">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>

            <p className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-white/45">
              Contacto profesional
              <br />
              {SITE.brandPerson}
              <br />
              {SITE.matricula}
            </p>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 py-6 text-xs text-white/50">
          <span>
            © 2026 Estudio Contable en Mendoza – Todos los derechos reservados.
          </span>
          <span>
            Web desarrollada por{" "}
            <a
              href="https://devzeppelin.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition hover:text-white hover:underline"
            >
              DevZeppelin
            </a>
          </span>
        </div>
      </Container>
    </footer>
  );
}
