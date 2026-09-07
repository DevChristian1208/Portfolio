"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isImpressum = pathname === "/impressum";
  const isDatenschutz = pathname === "/datenschutz";
  const isSimplePage = isImpressum || isDatenschutz;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[58px] ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_4px_30px_-8px_rgba(99,102,241,0.25)] border-b border-indigo-100"
          : "bg-white lg:bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] w-full px-6 sm:px-10 mx-auto">
        <div className="w-full h-[57px] flex items-center justify-between py-[30px] transition-all duration-300">
          <div className="text-2xl font-mono font-black tracking-tight text-gradient-bold drop-shadow-[0_0_18px_rgba(99,102,241,0.35)]">
            &lt;CS&gt;
          </div>
          {!isSimplePage ? (
            <div className="menu flex items-center">
              <ul className="flex m-0 list-none hidden lg:flex">
                {menuItems.map((item, index) => (
                  <li key={index} className="inline-block mr-[45px] last:mr-0">
                    <a
                      href={item.href}
                      className={`group relative no-underline font-bold transition-all duration-300 hover:text-indigo-500 ${
                        scrolled ? "text-black" : "text-white"
                      }`}
                    >
                      {item.label}
                      <span className="absolute -bottom-1.5 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>

              <div
                className={`ml-6 flex items-center font-semibold ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                <div
                  className="lg:hidden flex items-center cursor-pointer ml-4 group"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div className="relative w-6 h-6">
                    <span
                      className={`absolute h-1 w-full rounded origin-center transition-all duration-300 ${
                        isMenuOpen ? "rotate-45 top-2.5" : "top-0"
                      } bg-black group-hover:bg-indigo-500 group-hover:scale-110`}
                    />
                    <span
                      className={`absolute h-1 w-full rounded origin-center transition-all duration-300 top-2.5 ${
                        isMenuOpen ? "opacity-0" : "opacity-100"
                      } bg-black group-hover:bg-indigo-500 group-hover:scale-110`}
                    />
                    <span
                      className={`absolute h-1 w-full rounded origin-center transition-all duration-300 ${
                        isMenuOpen ? "-rotate-45 top-2.5" : "bottom-0"
                      } bg-black group-hover:bg-indigo-500 group-hover:scale-110`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`flex items-center font-semibold ${
                scrolled ? "text-black" : "text-white"
              }`}
            ></div>
          )}
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-[57px] left-0 right-0 bg-white/95 backdrop-blur-md z-10 shadow-[0_10px_30px_-8px_rgba(99,102,241,0.3)] border-b border-indigo-100 transition-transform duration-300">
            <ul className="flex flex-col items-center py-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a
                    href={item.href}
                    className="no-underline font-bold text-black text-lg transition-all duration-300 hover:text-indigo-500 hover:scale-105"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-4 py-2 border-t border-gray-200"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
