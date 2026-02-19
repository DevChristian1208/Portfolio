"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type Skill = { name: string; img: string; desc: string };
type Project = {
  title: string;
  images: string[];
  stack: string;
  desc: string;
  github: string;
  demo: string;
};

const SKILLS: Skill[] = [
  {
    name: "HTML",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    desc: "HTML ist die Grundlage jeder Webseite. Es sorgt dafür, dass Inhalte wie Texte, Bilder und Videos sinnvoll aufgebaut und im Browser korrekt dargestellt werden.",
  },
  {
    name: "CSS",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    desc: "Mit CSS gestalte ich das Aussehen von Webseiten – also Farben, Schriftarten, Abstände und Animationen. Es macht die Seite ansprechend und benutzerfreundlich.",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    desc: "JavaScript sorgt für Interaktivität – zum Beispiel klickbare Menüs, dynamische Inhalte oder Formulare mit Echtzeit-Feedback. Damit wird Ihre Seite lebendig.",
  },
  {
    name: "Next.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    desc: "Next.js ist ein modernes Web-Framework, das schnelle Ladezeiten, Suchmaschinenoptimierung (SEO) und perfekte Struktur für professionelle Webprojects bietet.",
  },
  {
    name: "TypeScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    desc: "TypeScript macht den Code zuverlässiger und besser wartbar. Damit entstehen langfristig stabile und sichere Anwendungen für Ihre Anforderungen.",
  },
  {
    name: "Firebase",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
    desc: "Mit Firebase kann ich Webanwendungen z. B. mit Login-Systemen, Datenbanken und Hosting ausstatten – ohne eigenen Server oder komplizierte Einrichtung.",
  },
];

const PROJECTS: Project[] = [
  {
    title: "DABubble",
    images: ["/DaBubble.png", "/DaBubbleFirst.png", "/DaBubbleSecond.png"],
    stack: "Next.JS | React | Tailwind | Firebase",
    desc: "Mit DaBubble können sich Nutzer anmelden, Channels erstellen und Direktnachrichten verschicken. Die Anwendung ermöglicht eine einfache Teamkommunikation in Echtzeit und orientiert sich am Prinzip von Slack.",
    github: "https://github.com/DevChristian1208/DaBubble",
    demo: "https://dabubble.christianseidel-developer.de",
  },
  {
    title: "TaskFlow",
    images: ["/TaskFlow2.png", "TaskFlowNewTask.png", "TaskFlowContacts.png"],
    stack: "Next.JS | React | Tailwind | Firebase",
    desc: "TaskFlow ist eine moderne Aufgaben- und Team-Management-App. Sie kombiniert To-Do-Listen, Board-Workflow (Kanban) und Contact-/Team-Verwaltung in einer Oberfläche.",
    github: "https://github.com/DevChristian1208/TaskFlow",
    demo: "https://taskflow.christianseidel-developer.de/Login",
  },
  {
    title: "El Pollo Loco",
    images: ["/startscreen_1.png"],
    stack: "JavaScript | HTML | CSS | OOP",
    desc: "Ein Jump’n’Run-Spiel mit klassischer Objektorientierung. Spielfigur Pepe kämpft gegen die verrückte Henne.",
    github: "https://github.com/DevChristian1208/elpolloloco",
    demo: "https://elpolloloco.christianseidel-developer.de",
  },
];

function clampModulo(n: number, max: number) {
  return (n + max) % max;
}

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = "0px";
    };
  }, [locked]);
}

export default function MyProjects() {
  const [activeSkillIdx, setActiveSkillIdx] = useState<number | null>(null);
  const [slideIdx, setSlideIdx] = useState<number[]>(() =>
    PROJECTS.map(() => 0)
  );
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useBodyScrollLock(activeSkillIdx !== null);

  const activeSkill = useMemo(
    () => (activeSkillIdx === null ? null : SKILLS[activeSkillIdx]),
    [activeSkillIdx]
  );

  const goPrev = (pIdx: number) => {
    setSlideIdx((prev) => {
      const next = [...prev];
      const max = PROJECTS[pIdx].images.length;
      next[pIdx] = clampModulo(next[pIdx] - 1, max);
      return next;
    });
  };

  const goNext = (pIdx: number) => {
    setSlideIdx((prev) => {
      const next = [...prev];
      const max = PROJECTS[pIdx].images.length;
      next[pIdx] = clampModulo(next[pIdx] + 1, max);
      return next;
    });
  };

  return (
    <section
      id="portfolio"
      className="relative isolate overflow-hidden text-slate-800 bg-[linear-gradient(to_bottom,_#ffffff_0%,_#f1f5ff_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(closest-side,white,transparent)]">
        <div className="absolute -top-28 -left-16 h-[44rem] w-[44rem] rounded-full bg-[conic-gradient(from_180deg,rgba(99,102,241,.34),rgba(236,72,153,.28),rgba(56,189,248,.28),rgba(99,102,241,.34))] blur-2xl animate-[aurora_14s_ease-in-out_infinite]" />
        <div className="absolute -bottom-32 -right-24 h-[40rem] w-[40rem] rounded-full bg-[conic-gradient(from_90deg,rgba(56,189,248,.26),rgba(99,102,241,.26),rgba(16,185,129,.26),rgba(56,189,248,.26))] blur-2xl animate-[aurora_16s_ease-in-out_infinite_reverse]" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-65"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2,6,23,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(2,6,23,.07) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, white 25%, white 100%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Meine Projekte
          </h2>
          <p className="mt-3 text-slate-700">
            Die folgenden Projekte sind während meiner Weiterbildung entstanden.
            Sie geben Einblick in meine Fähigkeiten und verdeutlichen, wie meine
            Leidenschaft für Webentwicklung meinen Weg als Entwickler geprägt
            hat.
          </p>
        </div>

        <div className="mt-14 grid gap-10">
          {PROJECTS.map((project, pIdx) => {
            const current = slideIdx[pIdx] ?? 0;
            const hasSlider = project.images.length > 1;

            return (
              <article
                key={project.title}
                className="group/card relative grid items-stretch gap-8 md:grid-cols-2 rounded-3xl border border-slate-200/90 bg-white/85 p-6 md:p-8 shadow-[0_10px_30px_-8px_rgba(2,6,23,0.15)] backdrop-blur-lg transition hover:shadow-[0_22px_60px_-10px_rgba(2,6,23,0.22)] md:hover:scale-[1.008]"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl p-[1px] [mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] [mask-composite:exclude] before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-[conic-gradient(from_180deg_at_50%_50%,#ef4444_0%,#3b82f6_25%,#22c55e_50%,#a855f7_75%,#ef4444_100%)] before:opacity-[0.18] group-hover/card:before:opacity-30 before:transition-opacity" />
                <div
                  className="relative order-2 md:order-1 group/slider"
                  style={{ perspective: "1200px" }}
                >
                  <div className="relative overflow-hidden rounded-2xl ring-1 ring-slate-200/70 bg-white/90 transition-transform duration-500 [transform-style:preserve-3d] group-hover/card:[transform:rotateX(1.5deg)_rotateY(-2.5deg)]">
                    <div
                      className="relative w-full aspect-[16/9] flex transition-transform duration-500 ease-out"
                      style={{ transform: `translateX(-${current * 100}%)` }}
                    >
                      {project.images.map((img, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="relative min-w-full h-full"
                        >
                          <Image
                            src={img}
                            alt={project.title}
                            fill
                            sizes="(min-width: 1280px) 640px, (min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
                            priority={pIdx === 0}
                            className="object-fill"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {hasSlider && (
                    <>
                      <div className="absolute inset-y-0 left-0 flex items-center z-[100] px-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            goPrev(pIdx);
                          }}
                          className="p-2 rounded-full bg-white/95 shadow-xl text-slate-800 opacity-100 md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity hover:bg-rose-50 pointer-events-auto"
                        >
                          <ChevronLeft size={24} />
                        </button>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center z-[100] px-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            goNext(pIdx);
                          }}
                          className="p-2 rounded-full bg-white/95 shadow-xl text-slate-800 opacity-100 md:opacity-0 md:group-hover/slider:opacity-100 transition-opacity hover:bg-rose-50 pointer-events-auto"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className="order-1 md:order-2 flex flex-col">
                  <header>
                    <h3 className="text-2xl md:text-3xl font-bold">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-indigo-600">
                      {project.stack}
                    </p>
                  </header>
                  <p className="mt-4 text-slate-700">{project.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300/90 bg-white px-4 py-2 text-sm text-slate-800 shadow-sm transition-all duration-700 hover:shadow-xl hover:border-slate-400 hover:-translate-y-1 active:scale-95"
                    >
                      GitHub
                    </Link>
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-rose-500 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-700 hover:shadow-indigo-500/40 hover:-translate-y-1 active:scale-95"
                    >
                      Live Demo
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Meine Fähigkeiten
          </h2>
          <p className="mt-3 text-slate-700">
            Technologien, mit denen ich Ihre individuellen Anforderungen
            professionell umsetze.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-5">
          {SKILLS.map((s, idx) => (
            <button
              key={s.name}
              onClick={() => setActiveSkillIdx(idx)}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/85 p-4 text-center shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto grid place-items-center size-16 rounded-xl bg-slate-50 ring-1 ring-slate-200">
                <img src={s.img} alt={s.name} className="h-10 w-10" />
              </div>
              <p className="relative mt-2 text-sm font-medium">{s.name}</p>
            </button>
          ))}
        </div>
      </div>
      {mounted &&
        activeSkill &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] grid place-items-center bg-black/40 px-4 backdrop-blur-sm"
            onClick={() => setActiveSkillIdx(null)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl"
            >
              <div className="flex items-start gap-4">
                <img
                  src={activeSkill.img}
                  alt={activeSkill.name}
                  className="h-12 w-12"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {activeSkill.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700">
                    {activeSkill.desc}
                  </p>
                </div>
                <button
                  onClick={() => setActiveSkillIdx(null)}
                  className="ml-auto rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                >
                  <X />
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
