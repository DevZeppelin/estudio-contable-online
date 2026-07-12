import Container from "./Container";
import { SITE } from "@/lib/seo";

const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué elegirnos", href: "#diferencial" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Preguntas", href: "#faq" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-azul shadow-[0_2px_12px_rgba(0,0,0,0.22)]">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#contenido" className="shrink-0 leading-tight">
          <p className="text-base font-bold text-white">
            Estudio Contable en Mendoza
          </p>
          <p className="hidden text-[11px] text-white/60 md:block">
            Cr. Darío Vallinas · C.P.C.E.M.D.Z.
          </p>
        </a>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-green px-4 py-2.5 text-sm"
        >
          💬 Hablá con el Contador
        </a>
      </Container>
    </header>
  );
}
