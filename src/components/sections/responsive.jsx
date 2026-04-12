import Image from "next/image";

export default function ResponsiveImage({ src, alt = "Imagen" }) {
  return (
    <div className="w-full bg-linear-to-b from-white/40 to-transparent">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={1800}
        className="h-auto max-w-6xl mx-auto w-full object-contain"
        sizes="100vw"
        priority
      />
    </div>
  );
}
