import "../styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/seo";
import { Inter, Sora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "Estudio Contable en Mendoza 100% Online | Turno en minutos",
    template: "%s | Estudio Contable en Mendoza",
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.domain,
    title: "Estudio Contable en Mendoza 100% Online",
    description: SITE.description,
    siteName: SITE.name,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Contable en Mendoza 100% Online",
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es-AR">
      <body className={`${inter.variable} ${sora.variable}`}>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus: focus:px-4 focus:py-2 focus:shadow-soft"
        >
          Saltar al contenido
        </a>

        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
