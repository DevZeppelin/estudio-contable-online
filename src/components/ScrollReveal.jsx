"use client";

import { useEffect } from "react";

/**
 * Revela suavemente las secciones al entrar en el viewport.
 * Solo activa los estilos de animación cuando hay JS (clase en <html>),
 * así el contenido nunca queda oculto sin JavaScript ni para crawlers.
 * Respeta prefers-reduced-motion (se maneja desde CSS).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-reveal");

    const targets = document.querySelectorAll(
      "main section, main .reveal-item",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((el) => {
      // Lo que ya está en pantalla al cargar se muestra sin demora
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add("is-visible");
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
