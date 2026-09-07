"use client";

import Image from "next/image";

type AboutmeProps = {
  myname: string;
};

const Aboutme = ({ myname }: AboutmeProps) => {
  return (
    <section id="about" className="relative w-full overflow-hidden bg-[#0b0e1a]">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,.22),transparent_70%)] blur-3xl animate-aurora" />
        <div className="absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,.18),transparent_70%)] blur-3xl animate-aurora-reverse" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(closest-side, white, transparent)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-start">
            <figure className="relative w-full max-w-[320px] sm:max-w-[360px]">
              <span
                aria-hidden="true"
                className="hidden sm:block absolute -top-6 -left-6 sm:-top-8 sm:-left-8 h-36 w-36 sm:h-48 sm:w-48 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 animate-glow-pulse"
              />
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-[0_20px_50px_-15px_rgba(99,102,241,0.45)] ring-1 ring-white/10 aspect-[4/5]">
                <Image
                  src="/IMG_3721.jpg"
                  alt={`Portrait von ${myname}`}
                  fill
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 420px"
                  className="object-cover"
                  priority
                />
              </div>

              <figcaption className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4 z-30 rounded-xl bg-[#0b0e1a]/90 backdrop-blur px-3 py-2 sm:px-4 sm:py-2.5 shadow-md ring-1 ring-white/10">
                <p className="text-xs sm:text-sm font-medium text-white">
                  {myname}
                </p>
                <p className="text-[11px] sm:text-xs text-white/50">
                  Junior Frontend Entwickler
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <span className="font-mono text-sm font-bold uppercase tracking-widest text-cyan-400">
              {"// über mich"}
            </span>

            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[2.5rem] font-black leading-tight text-white">
              Hi, ich bin{" "}
              <span className="text-gradient-bold">{myname}</span>
            </h2>

            <p className="mt-2 text-lg sm:text-xl font-semibold text-white/90">
              Junior Frontend Entwickler mit Fokus auf React & Next.js
            </p>

            <p className="mt-4 sm:mt-5 text-[15.5px] leading-7 text-white/60 max-w-prose">
              Ich entwickle moderne, performante Weboberflächen mit React,
              Next.js und Tailwind CSS. Mein Fokus liegt auf sauberem Code,
              responsivem Design und einer guten User Experience. Aktuell suche
              ich eine Junior-Position, in der ich mich fachlich
              weiterentwickeln und aktiv im Team mitarbeiten kann.
            </p>

            <ul className="mt-6 space-y-3 text-[15.5px] text-white/85">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-xs text-white shadow-sm">
                  ✔
                </span>
                <span>
                  <strong className="text-white">Moderne Frontends</strong> –
                  React, Next.js, TypeScript und Tailwind CSS.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-xs text-white shadow-sm">
                  ✔
                </span>
                <span>
                  <strong className="text-white">Sauberer Code</strong> –
                  wiederverwendbare Komponenten, klare Struktur und Best
                  Practices.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-xs text-white shadow-sm">
                  ✔
                </span>
                <span>
                  <strong className="text-white">Lernbereit & motiviert</strong>{" "}
                  – offen für Feedback, neue Technologien und Teamarbeit.
                </span>
              </li>
            </ul>

            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#projects"
                className="inline-flex justify-center items-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 bg-[length:200%_100%] bg-left hover:bg-right px-5 py-3 text-white text-sm font-bold shadow-[0_8px_24px_-8px_rgba(99,102,241,0.5)] transition-all duration-500 hover:shadow-[0_12px_30px_-6px_rgba(99,102,241,0.65)] hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Projekte ansehen
              </a>

              <a
                href="#contact"
                className="inline-flex justify-center items-center rounded-xl border-2 border-white/15 px-5 py-3 text-sm font-bold text-white hover:border-indigo-400/60 hover:bg-white/5 hover:text-indigo-300 transition-colors w-full sm:w-auto"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
