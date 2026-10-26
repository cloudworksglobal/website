import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />

        {/* Contenedor del selector flotante de idioma */}
        <div className="gtranslate_wrapper fixed bottom-6 right-6 z-50"></div>

        {/* Configuración de GTranslate */}
        <Script
          id="gtranslate-settings"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.gtranslateSettings = {
                "default_language": "es",
                "languages": ["es", "en"],
                "wrapper_selector": ".gtranslate_wrapper",
                "switcher_horizontal_position": "right",
                "switcher_vertical_position": "bottom",
                "alt_flags": {"en": "usa"},
                "auto_switch": 1
              };
            `,
          }}
        />
        {/* Script del motor de traducción */}
        <Script
          src="https://cdn.gtranslate.net/widgets/latest/float.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
