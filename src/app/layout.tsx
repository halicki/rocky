import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surfing with Rocky — Surf Lessons in Canggu, Bali",
  description:
    "Professional surf lessons in Canggu, Bali. All levels welcome. Book via WhatsApp.",
  openGraph: {
    title: "Surfing with Rocky — Surf Lessons in Canggu, Bali",
    description:
      "Professional surf lessons in Canggu, Bali. All levels welcome. Book via WhatsApp.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
