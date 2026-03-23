"use client";

import { WHATSAPP_URL } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 md:hidden"
    >
      💬 WhatsApp Rocky
    </a>
  );
}
