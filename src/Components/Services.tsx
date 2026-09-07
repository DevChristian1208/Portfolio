"use client";

type Tier = {
  name: string;
  id: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  cta?: { label: string; href: string };
};

const TIERS: Tier[] = [
  {
    name: "Starter Paket",
    id: "tier-starter",
    price: "ab 750€",
    description:
      "Ideal für den schnellen Einstieg: eine performante, mobilfreundliche Landing Page.",
    features: [
      "1 Seite (Landing Page) – neu erstellt in Next.js",
      "Optimiert für mobile Geräte & Ladegeschwindigkeit",
      "Kontaktformular & rechtliche Seiten (Impressum, DSGVO)",
      "Domain-Einrichtung inklusive Unterstützung",
      "Optional: Hosting über mich mit Vercel",
      "Optional: Pflege & Wartung buchbar (z. B. Textänderungen, Backups)",
    ],
  },
  {
    name: "Business Paket",
    id: "tier-business",
    price: "ab 950€",
    description:
      "Ideal für kleine Unternehmen, die Leistungen, Team & Kontakt strukturiert präsentieren wollen.",
    features: [
      "Individuelles Design mit Animationen & Effekten",
      "3–5 Seiten (z. B. Start, Leistungen, Über uns, Kontakt)",
      "Neu entwickelt mit Next.js (modern, sicher, schnell)",
      "Domain-Einrichtung inklusive Hilfe",
      "Individuelle Features und Funktionen",
      "Optional: Hosting über mich mit Vercel",
      "Optional: Pflege & Wartung buchbar (z. B. Textänderungen, Backups)",
    ],
    badge: "Empfohlen",
    highlight: true,
  },
  {
    name: "Premium Paket",
    id: "tier-premium",
    price: "ab 1200€",
    description:
      "Maßgeschneiderte Weblösung mit besonderen Funktionen, individuellem Design & technischer Betreuung.",
    features: [
      "Individuelles Design mit Animationen & Effekten",
      "Beliebig viele Seiten",
      "Blog, Galerie, FAQ oder individuelle Features",
      "Beste Performance, Sicherheit & SEO durch Next.js",
      "Domain-Einrichtung inklusive Support",
      "Optional: Hosting über mich mit Vercel",
      "4 Monate Pflege & Updates inklusive (danach optional weiterführbar)",
    ],
  },
];

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function Services() {
  return (
    <section
      id="service"
      className="relative isolate text-slate-800 bg-[linear-gradient(to_bottom,_#ffffff_0%,_#f7f9ff_65%,_#46466a_92%)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[80%] -z-10">
        <div className="absolute -top-24 left-[8%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,.22),transparent_70%)] blur-3xl animate-aurora" />
        <div className="absolute top-10 right-[5%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,.2),transparent_70%)] blur-3xl animate-aurora-reverse" />
        <div
          className="absolute inset-0 opacity-50 [mask-image:linear-gradient(to_bottom,white,transparent_85%)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(2,6,23,.055) 1px, transparent 1px), linear-gradient(90deg, rgba(2,6,23,.055) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 -z-10 bg-gradient-to-b from-transparent to-[#2e2e48]" />

      <div className="container mx-auto px-4 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-indigo-500 font-bold uppercase tracking-widest text-xs">
            Was ich anbiete
          </span>

          <h2 className="mt-2 text-4xl md:text-5xl font-black tracking-tight text-gradient-bold">
            Meine Pakete
          </h2>

          <p className="mt-3 text-slate-700">
            Ich entwickle moderne Websites mit klarer Struktur und zuverlässiger
            Technik. Grundlage sind bewährte Designkonzepte, die individuell
            angepasst werden.
          </p>

          <p className="mt-6 text-slate-700">
            Auf Baukastensysteme wie WordPress oder Wix verzichte ich bewusst.
            Die Umsetzung erfolgt mit Next.js für hohe Performance, Sicherheit
            und langfristige Wartbarkeit.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TIERS.map((t) => {
            const hot = t.highlight;
            return (
              <div
                key={t.id}
                className={cx(
                  "group relative rounded-3xl border bg-white/90 p-8 backdrop-blur shadow-[0_12px_30px_-10px_rgba(2,6,23,0.15)] transition-all duration-500 hover:-translate-y-1.5",
                  hot
                    ? "border-indigo-200 shadow-[0_18px_45px_-12px_rgba(99,102,241,0.35)] hover:shadow-[0_26px_65px_-12px_rgba(99,102,241,0.5)] md:scale-[1.03]"
                    : "border-slate-200/90 hover:shadow-[0_22px_60px_-10px_rgba(2,6,23,0.20)]"
                )}
              >
                {t.badge && (
                  <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                    {t.badge}
                  </div>
                )}

                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="mt-2 text-sm text-slate-700">{t.description}</p>

                <p className="mt-5 text-3xl font-black text-gradient-bold">
                  {t.price}
                </p>

                <ul className="mt-6 space-y-3 text-sm">
                  {t.features.map((f, i) => (
                    <li key={`${t.id}-${i}`} className="flex gap-2">
                      <span className="mt-1.5 inline-block size-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                      <span className="text-slate-800">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
