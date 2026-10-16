export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Orqa fondagi yorug' dog'lar */}
      <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-violet-600/30 blur-3xl" />
      <div className="absolute right-1/4 top-40 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-5xl flex-col justify-center px-6">
        <p className="mb-3 font-medium text-violet-400">Salom, men 👋</p>
        <h1 className="bg-linear-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-4xl font-bold text-transparent sm:text-6xl">
          Lolaxon Xayrullayeva
        </h1>
        <h2 className="mt-3 text-xl text-slate-300 sm:text-2xl">
          Frontend Developer (React / Next.js)
        </h2>
        <p className="mt-6 max-w-xl text-slate-400">
          Zamonaviy, tez va qulay veb-ilovalar yarataman. Hozir real loyihalarda
          ishlash uchun stajirovka izlayapman.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-linear-to-r from-violet-600 to-pink-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-600/30 transition hover:opacity-90"
          >
            Loyihalarim
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/20 px-6 py-3 text-slate-200 transition hover:bg-white/10"
          >
            Bog'lanish
          </a>
        </div>
      </div>
    </section>
  );
}