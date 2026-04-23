import type { Metadata } from "next";
import { Instrument_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sander Floria — Computer Science, Edinburgh Napier",
  description:
    "Second-year CS student building real software — from a Python experiment that ran on the ISS, to an AI receptionist running in a Tuscan dental practice, to agents that shop used cars across six brands.",
  metadataBase: new URL("https://sanderfloria.dev"),
  authors: [{ name: "Sander Floria" }],
  openGraph: {
    title: "Sander Floria — Portfolio",
    description:
      "Software that handles real work — from the ISS to Tuscan dental clinics.",
    type: "profile",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
