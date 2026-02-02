import Container from "./Container";

const nav = [
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué elegirnos", href: "#diferencial" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Preguntas", href: "#faq" },
  { label: "Reservar", href: "#reservar" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-celeste /80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#contenido" className="flex items-center gap-2">
          <div className="leading-tight">
            <p className="text-sm font-semibold text-azul">
              Estudio Contable Mendoza
            </p>
            <p className="text-xs text-muted">100% online</p>
          </div>
        </a>

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Principal"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-azul"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#reservar"
            className="btn inline-flex items-center justify-center rounded-xl  px-4 py-2 text-sm font-semibold text-bg shadow-soft hover:opacity-95"
          >
            Reservar turno
          </a>
        </div>
      </Container>
    </header>
  );
}
