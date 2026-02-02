import CalendlyPopupButton from "./CalendlyPopupButton";

export default function ContactCTAs({
  calendlyUrl = "https://calendly.com/contador-publico-matriculado-mendoza",
  linkedinUrl = "https://www.linkedin.com/in/dario-vallinas-contador-publico-mendoza",
  title = "Reservá tu reunión online",
  subtitle = "Elegí día y horario. La reunión es 100% online y confidencial.",
}) {
  return (
    <div className="rounded-3xl bg-white/70 backdrop-blur-md p-6 shadow-[0_12px_35px_rgba(15,23,42,0.10)] sm:p-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-extrabold tracking-tight text-[rgb(var(--azul))]">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[rgb(var(--muted))]">
          {subtitle}
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <CalendlyPopupButton
          url={calendlyUrl}
          text="Programe una reunión conmigo"
          className="w-full sm:w-auto"
        />

        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={[
            "inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold",
            "bg-white/80 text-[rgb(var(--azul))] shadow-sm ring-1 ring-black/5 transition hover:bg-white",
            "focus:outline-none focus:ring-2 focus:ring-[rgb(var(--celeste)/0.35)] focus:ring-offset-2 focus:ring-offset-transparent",
            "sm:w-auto",
          ].join(" ")}
          aria-label="Abrir perfil de LinkedIn"
        >
          Ver LinkedIn
        </a>
      </div>

      <p className="mt-4 text-xs text-[rgb(var(--muted))]">
        🔒 La información que brindes se utiliza solo para coordinar la reunión.
      </p>
    </div>
  );
}
