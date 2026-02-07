import Container from "./Container";
import { SITE } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className=" ">
      <Container className="py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-azul">{SITE.name}</p>
            <p className="text-base text-muted">
              Atención profesional y confidencial
            </p>
          </div>
          <div className="text-base text-muted">
            <p>{SITE.domain.replace("https://", "")}</p>
            <p>{SITE.brandPerson}</p>
            <p>© {new Date().getFullYear()} Todos los Derechos Reservados</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
