"use client";

import { useState } from "react";

export default function CalendlyPopupButton({
    url = "https://calendly.com/contador-publico-matriculado-mendoza",
    text = "Programe una reunión conmigo",
    className = "",
}) {
    const [loading, setLoading] = useState(false);

    const loadScript = () =>
        new Promise((resolve, reject) => {
            if (window.Calendly) return resolve(true);

            const existing = document.querySelector('script[data-calendly="true"]');
            if (existing) {
                existing.addEventListener("load", () => resolve(true));
                return;
            }

            const s = document.createElement("script");
            s.src = "https://assets.calendly.com/assets/external/widget.js";
            s.async = true;
            s.dataset.calendly = "true";
            s.onload = () => resolve(true);
            s.onerror = reject;
            document.body.appendChild(s);
        });

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await loadScript();
            window.Calendly.initPopupWidget({ url });
        } catch {
            window.open(url, "_blank", "noopener,noreferrer");
        } finally {
            setLoading(false);
        }
    };

    return (
        <a
            href={url}
            onClick={handleClick}
            className={[
                "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-base font-semibold",
                "text-white shadow-lg transition hover:opacity-95",
                "bg-[linear-gradient(135deg,rgb(var(--cian)),rgb(var(--celeste)))]",
                loading ? "opacity-80 pointer-events-none" : "",
                className,
            ].join(" ")}
        >
            <span aria-hidden="true">🟢</span>
            {loading ? "Cargando..." : text}
        </a>
    );
}
