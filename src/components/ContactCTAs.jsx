import CalendlyPopupButton from "./CalendlyPopupButton";

export default function ContactCTAs({
  calendlyUrl = "https://calendly.com/contador-publico-matriculado-mendoza",
  whatsappUrl = "https://wa.me/542615740182",
  title = "¿Necesitás resolver tu situación contable?",
  subtitle = "Elegí la forma más cómoda para contactarnos.",
}) {
  return (
    <div className="rounded-3xl bg-white/70 backdrop-blur-md p-6 shadow-[0_14px_40px_rgba(15,23,42,0.12)] sm:p-8">
      {/* TITULO */}
      <div className="flex flex-col gap-2 text-center sm:text-left">
        <h3 className="text-2xl font-extrabold tracking-tight text-[rgb(var(--azul))]">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-[rgb(var(--muted))]">
          {subtitle}
        </p>
      </div>

      {/* BOTONES */}
      <div className="mt-8 flex flex-col gap-4">
        {/* 🟢 BOTÓN PRINCIPAL */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex w-full items-center justify-center gap-3
            rounded-2xl px-6 py-4
            text-lg font-semibold text-white
            bg-[linear-gradient(135deg,rgb(var(--cian)),rgb(var(--celeste)))]
            shadow-[0_14px_35px_rgba(15,23,42,0.25)]
            transition hover:opacity-95 hover:-translate-y-0.5
          "
        >
          🟢 Hablar por WhatsApp ahora
        </a>

        {/* 🟡 BOTÓN SECUNDARIO */}
        <CalendlyPopupButton
          url={calendlyUrl}
          text="Agendar reunión orientativa sin cargo"
          className="
            w-full rounded-2xl px-6 py-3
            text-base font-semibold
            bg-white text-[rgb(var(--azul))]
            ring-1 ring-black/10
            shadow-sm
            hover:bg-slate-50
          "
        />

        {/* TEXTO PEQUEÑO */}
        <p className="text-center text-sm text-[rgb(var(--muted))]">
          20 minutos – Online o Presencial – Confidencial – Sin compromiso
        </p>
      </div>

      {/* NOTA DE CONFIANZA */}
      <p className="mt-6 text-xs text-center text-[rgb(var(--muted))]">
        🔒 La información que brindes se utiliza solo para coordinar la reunión.
      </p>
    </div>
  );
}
