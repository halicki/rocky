import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const GA_ID = "G-0LTBL2X919";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
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
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Surfing With Rocky | Surf Lessons Batu Bolong Canggu Bali",
    description:
      "Learn to surf in Batu Bolong, Canggu with Rocky and his local surf team. Beginner friendly surf lessons in Bali with a professional lifeguard instructor.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
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
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}
      >
        <StructuredData />
        {children}
        <Analytics />
        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
