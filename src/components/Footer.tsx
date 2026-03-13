export default function Footer() {
  return (
    <footer className="bg-[#0a0f1a] px-6 py-6 text-center text-xs text-text-secondary/40">
      <p className="font-semibold">Surfing With Rocky</p>
      <address className="not-italic mt-1">
        Batu Bolong Beach · Canggu, Bali, Indonesia
      </address>
      <p className="mt-2">
        © {new Date().getFullYear()} Surfing With Rocky. All rights reserved.
      </p>
    </footer>
  );
}
