export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] px-6 py-8 text-center">
      <p className="font-heading text-sm font-semibold text-white/60">
        Surfing With Rocky
      </p>
      <p className="mt-1 text-xs text-text-secondary/30">
        Batu Bolong Beach · Canggu, Bali, Indonesia
      </p>
      <p className="mt-2 text-xs text-text-secondary/20">
        © {new Date().getFullYear()} All rights reserved
      </p>
    </footer>
  );
}
