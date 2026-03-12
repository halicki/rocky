"use client";

import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-2xl text-white shadow-lg transition-transform hover:scale-110 md:hidden"
    >
      💬
    </a>
  );
}
