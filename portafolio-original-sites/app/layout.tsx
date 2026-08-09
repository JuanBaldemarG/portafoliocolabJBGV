import type { Metadata } from "next";
import { Source_Sans_3, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portafolio de Ejercicios de Analítica y Ciencia de Datos",
  description:
    "Portafolio de ejercicios de analítica y ciencia de datos para alumnos de posgrado y de educación continua en UDEM, publicado en un sitio privado e independiente.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${sourceSans.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
