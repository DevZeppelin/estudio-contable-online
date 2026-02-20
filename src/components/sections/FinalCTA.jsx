import Container from "@/components/Container";

export default function FinalCTA() {
  return (
    <section className="">
      <Container className="py-14">
        <div className="rounded-3xl  p-8 text-bg shadow-soft sm:p-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            Ordená tu situación contable hoy
          </h2>
          <p className="mt-3 max-w-2xl text-bg/90">
            Si estás buscando un contador en Mendoza que te brinde asesoramiento
            profesional, claro y confiable, estás en el lugar correcto.
          </p>
          <p className="mt-3 max-w-2xl text-bg/90">
            Agendá tu reunión orientativa o escribinos por WhatsApp y empezá a
            resolver tu situación impositiva con respaldo profesional.
          </p>

          <div className="mt-7">
            <a
              href="#reservar"
              className="inline-flex btn items-center justify-center rounded-xl  px-6 py-3 text-base font-semibold text-bg hover:opacity-95"
            >
              🟢 Reservar turno ahora
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
