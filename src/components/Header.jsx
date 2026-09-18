import Container from "./Container";
import { SITE } from "@/lib/seo";

const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "ARCA", href: "#arca" },
  { label: "Nosotros", href: "#diferencial" },
  { label: "Reseñas", href: "#opiniones" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-azul shadow-[0_2px_12px_rgba(0,0,0,0.22)]">
      <Container className="flex h-[60px] items-center justify-between gap-3">
        <a href="#contenido" className="shrink-0 leading-tight">
          <p className="text-sm font-bold text-white sm:text-base">
            Estudio Contable en Mendoza
          </p>
          <p className="hidden text-[10px] text-white/60 md:block">
            {SITE.brandPerson} · {SITE.matricula}
          </p>
        </a>

        <nav
          className="hidden items-center gap-[18px] md:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={SITE.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-green px-3.5 py-2 text-[13px]"
        >
          💬 WhatsApp
        </a>
      </Container>
    </header>
  );
}
