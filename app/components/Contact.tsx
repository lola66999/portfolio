const contacts = [
  {
    label: "Email",
    value: "lolaxonxayrullayeva@gmail.com",
    href: "mailto:lolaxonxayrullayeva@gmail.com",
  },
  {
    label: "Telefon",
    value: "+998 94 176 69 99",
    href: "tel:+998941766999",
  },
  {
    label: "GitHub",
    value: "github.com/sizning-nomingiz",
    href: "https://github.com/lola66999/github_new",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <h2 className="text-3xl font-bold text-white">
        Aloqa<span className="text-pink-400">.</span>
      </h2>
      <p className="mt-4 max-w-xl text-slate-400">
        Stajirovka yoki jamoaviy loyiha bo'yicha taklifingiz bo'lsa, bemalol
        yozing. Tez javob beraman.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {contacts.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-violet-500/50 hover:bg-white/10"
          >
            <p className="text-sm text-violet-300">{c.label}</p>
            <p className="mt-1 break-all text-slate-200">{c.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}