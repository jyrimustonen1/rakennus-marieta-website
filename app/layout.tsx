import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rakennus Marieta - Espoon rakennusliike",
  description: "Ammattitaitoista rakennus- ja saneeraustyötä Espoossa. Remontit, saneeraukset ja uudisrakentaminen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

