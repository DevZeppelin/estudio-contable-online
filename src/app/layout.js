import "../styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/seo";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

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
    default: "Estudio Contable en Mendoza | Contador Matriculado | Turno en minutos",
    template: "%s | Estudio Contable en Mendoza",
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.domain,
    title: "Estudio Contable en Mendoza | Contador Matriculado",
    description: SITE.description,
    siteName: SITE.name,
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: SITE.name }],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Contable en Mendoza | Contador Matriculado",
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
      <head>
        {/* Carga gtag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17944842046"
          strategy="afterInteractive"
        />

        {/* Configuración */}
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17944842046');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${sora.variable}`}>
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus: focus:px-4 focus:py-2 focus:shadow-soft"
        >
          Saltar al contenido
        </a>

        <Header />
        <main id="contenido">{children}</main>
        <WhatsAppFloatingButton
          phone="542615740182"
          message="Hola! Quiero hacer una consulta."
        />
        <Footer />
      </body>
    </html>
  );
}
