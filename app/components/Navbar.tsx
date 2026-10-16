const links = [
  { href: "#about", label: "Men haqimda" },
  { href: "#skills", label: "Ko'nikmalar" },
  { href: "#projects", label: "Loyihalar" },
  { href: "#contact", label: "Aloqa" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-lg font-bold text-transparent"
        >
          Lolaxon.dev
        </a>
        <ul className="hidden gap-6 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}