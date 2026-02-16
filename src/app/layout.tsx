import type { Metadata } from "next";
import { EB_Garamond, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Motor Legacy Center",
    template: "%s | Motor Legacy Center",
  },
  description:
    "Preserving the past. Inspiring the future. An extraordinary destination celebrating automotive history, innovation, and the enduring passion for the machines that moved the world.",
  keywords: [
    "auto museum",
    "car museum",
    "automotive history",
    "classic cars",
    "motor legacy center",
    "automotive education",
    "vehicle storage",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ebGaramond.variable} ${sourceSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
