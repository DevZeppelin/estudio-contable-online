import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-white/60 backdrop-blur-md">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Columna izquierda */}
          <div className="space-y-3">
            <h2 className="text-xl font-extrabold text-[rgb(var(--azul))]">
              Estudio Contable en Mendoza
            </h2>

            <p className="text-sm font-semibold text-[rgb(var(--azul))]">
              Contador Público Matriculado C.P.C.E.M.D.Z.
            </p>

            <p className="text-sm text-[rgb(var(--muted))]">
              Servicios contables para monotributistas, autónomos y PYMES en
              Mendoza.
            </p>

            <p className="text-sm text-[rgb(var(--muted))]">
              Atención online y presencial.
            </p>
          </div>

          {/* Columna derecha */}
          <div className="space-y-3 text-sm text-[rgb(var(--muted))]">
            <p className="font-semibold text-[rgb(var(--azul))]">
              Contacto: Cr. Dario Vallinas
            </p>

            <p>
              WhatsApp:{" "}
              <a
                href="https://wa.me/542615740182"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[rgb(var(--celeste))] hover:underline"
              >
                +54 9 2615740182
              </a>
            </p>

            <p>
              Email:{" "}
              <a
                href="mailto:cpnvallinas@gmail.com"
                className="font-medium text-[rgb(var(--celeste))] hover:underline"
              >
                cpnvallinas@gmail.com
              </a>
            </p>

            <p className="pt-2">
              © 2026 Estudio Contable en Mendoza – Todos los derechos
              reservados.
            </p>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="mt-10 border-t border-black/5 pt-6 text-center text-xs text-[rgb(var(--muted))]">
          Web desarrollada por{" "}
          <a
            href="https://devzeppelin.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[rgb(var(--azul))] hover:underline"
          >
            DevZeppelin
          </a>
        </div>
      </Container>
    </footer>
  );
}
