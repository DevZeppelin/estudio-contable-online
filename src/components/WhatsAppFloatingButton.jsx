"use client";

import Image from "next/image";

export default function WhatsAppFloatingButton({
  phone = "542615740182", // sin +, sin espacios
  message = "Hola! Quiero hacer una consulta.",
  imageSrc = "/images/whatsapp.webp",
  imageAlt = "WhatsApp",
  size = 90, // px
  className = "",
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para enviar un mensaje"
      className={[
        "fixed bottom-5 right-5 z-50",
        "inline-flex items-center justify-center",
        className,
      ].join(" ")}
      style={{ width: size, height: size }}
    >
      {/* Ping suave opcional */}

      <Image
        src={imageSrc}
        alt={imageAlt}
        width={size}
        height={size}
        className="rounded-full"
        priority={false}
      />
    </a>
  );
}
