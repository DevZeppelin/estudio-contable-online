import Container from "@/components/Container";

export default function FinalCTA() {
  return (
    <section className="">
      <Container className="py-14">
        <div className="rounded-3xl  p-8 text-bg shadow-soft sm:p-12">
          <h2 className="text-2xl font-extrabold sm:text-3xl">
            No sigas postergando tu problema contable
          </h2>
          <p className="mt-3 max-w-2xl text-bg/90">
            Una reunión puede ahorrarte multas, errores y dolores de cabeza.
          </p>

          <div className="mt-7">
            <a
              href="#reservar"
              className="inline-flex btn items-center justify-center rounded-xl  px-6 py-3 text-sm font-semibold text-bg hover:opacity-95"
            >
              🟢 Reservar turno ahora
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
