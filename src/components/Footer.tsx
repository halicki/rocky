export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-6 py-8 text-center">
      <p className="font-heading text-sm font-semibold text-white/60">
        Surfing With Rocky
      </p>
      <address className="mt-1 text-xs not-italic text-text-secondary/30">
        <span>Batu Bolong Beach</span>
        {" · "}
        <span>Canggu, Bali, Indonesia</span>
      </address>
      <p className="mt-2 text-xs text-text-secondary/20">
        © {new Date().getFullYear()} Surfing With Rocky. All rights reserved.
      </p>
    </footer>
  );
}
