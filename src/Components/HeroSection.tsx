"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "@/Components/Header";
import TrueFocus from "./TrueFocus";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <Header />

      <section
        id="home"
        className="
          relative isolate overflow-hidden
          min-h-[100svh]
          bg-gradient-to-br
          from-[#0b1220]
          via-[#16223a]
          to-[#2b2e6f]
        "
      >
        <h1 className="sr-only">
          Webentwicklung mit Next.js für lokale Unternehmen
        </h1>

        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-24 left-[-18%] h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(244,63,94,.35),transparent_70%)] blur-3xl" />
          <div className="absolute bottom-0 right-[-18%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,.4),transparent_70%)] blur-3xl" />
        </div>

        <div
          className="
            relative z-10
            mx-auto max-w-7xl
            px-4 sm:px-6 lg:px-8
            pt-24
            min-h-[100svh]
            grid grid-cols-1 lg:grid-cols-12
            items-center
          "
        >
          <div className="lg:hidden flex justify-center mb-10">
            <div className="relative w-full max-w-[320px] h-[420px]">
              <Image
                src="/file.png"
                alt="Christian Seidel – Webentwickler"
                fill
                priority
                className="
                  object-contain object-bottom
                  [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]
                "
              />
            </div>
          </div>

          <div
            className={[
              mounted ? "opacity-100" : "opacity-0",
              "lg:col-span-6 lg:col-start-7 flex flex-col justify-center text-center lg:text-left space-y-4 transition-opacity duration-500",
            ].join(" ")}
          >
            <h2 className="text-slate-300 text-lg sm:text-xl font-light">
              Hallo, ich bin
            </h2>

            <h2 className="text-rose-500 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[0.95]">
              Christian
            </h2>

            <div className="text-white text-2xl sm:text-4xl md:text-5xl font-semibold flex justify-center lg:justify-start">
              <span className="block min-[800px]:hidden">
                Frontend Developer
              </span>

              <div className="hidden min-[800px]:block">
                <TrueFocus
                  sentence="Frontend Developer"
                  manualMode
                  blurAmount={4}
                  borderColor="rgb(244 63 94)"
                  animationDuration={2}
                  pauseBetweenAnimations={2}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
              <a
                href="#contact"
                className="
                  bg-rose-500 hover:bg-rose-600
                  text-white
                  px-7 py-3 rounded-lg
                  font-semibold
                  transition-colors
                  flex items-center gap-2
                "
              >
                Say Hello
                <Image src="/message.svg" alt="" width={16} height={16} />
              </a>

              <a
                href="#about"
                className="text-slate-300 hover:text-rose-400 font-semibold transition-colors"
              >
                About Me
              </a>
            </div>

            <div className="sm:hidden text-xs text-slate-400 pt-2">
              <a
                href="mailto:christian.pressig@web.de"
                className="hover:underline"
              >
                christian.pressig@web.de
              </a>
            </div>
          </div>
        </div>

        <div
          className="
            hidden lg:block
            pointer-events-none
            absolute bottom-0 left-0
            w-[56%]
            h-[88vh]
            z-0
          "
        >
          <Image
            src="/file.png"
            alt="Christian Seidel – Webentwickler"
            fill
            priority
            className="
              object-contain object-bottom 
              drop-shadow-[0_-16px_40px_rgba(0,0,0,0.45)]
              [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]
            "
          />
        </div>

        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[#0b1220]" />

        <div className="hidden lg:block absolute bottom-6 right-6 text-slate-300 text-sm z-10">
          <a href="mailto:christian.pressig@web.de" className="hover:underline">
            christian.pressig@web.de
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
