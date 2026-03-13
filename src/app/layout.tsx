import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import StructuredData from "@/components/StructuredData";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Surfing With Rocky | Surf Lessons Batu Bolong Canggu Bali",
  description:
    "Learn to surf in Batu Bolong, Canggu with Rocky and his local surf team. Beginner friendly surf lessons in Bali with a professional lifeguard instructor.",
  keywords: [
    "surf lessons Canggu",
    "surf lessons Batu Bolong",
    "surf school Bali",
    "learn to surf Bali",
    "beginner surf lessons Bali",
    "surf instructor Canggu",
    "surf guiding Bali",
    "surf lessons Batu Bolong Beach",
  ],
  alternates: {
    canonical: "https://surfingwithrocky.com",
  },
  openGraph: {
    title: "Surfing With Rocky | Surf Lessons Batu Bolong Canggu Bali",
    description:
      "Learn to surf in Batu Bolong, Canggu with Rocky and his local surf team. Beginner friendly surf lessons in Bali with a professional lifeguard instructor.",
    type: "website",
    locale: "en_US",
    url: "https://surfingwithrocky.com",
    siteName: "Surfing With Rocky",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surfing With Rocky | Surf Lessons Batu Bolong Canggu Bali",
    description:
      "Learn to surf in Batu Bolong, Canggu with Rocky and his local surf team. Beginner friendly surf lessons in Bali.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
