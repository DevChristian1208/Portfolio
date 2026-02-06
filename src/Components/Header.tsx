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
        scrolled ? "bg-white shadow-md" : "bg-white lg:bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] w-full px-6 sm:px-10 mx-auto">
        <div className="w-full h-[57px] flex items-center justify-between py-[30px] transition-all duration-300">
          <div className="text-2xl font-mono font-bold text-[#ea4343]">
            &lt;CS&gt;
          </div>
          {!isSimplePage ? (
            <div className="menu flex items-center">
              <ul className="flex m-0 list-none hidden lg:flex">
                {menuItems.map((item, index) => (
                  <li key={index} className="inline-block mr-[45px] last:mr-0">
                    <a
                      href={item.href}
                      className={`no-underline font-semibold transition-all duration-300 hover:text-[#ea4343] ${
                        scrolled ? "text-black" : "text-white"
                      }`}
                    >
                      {item.label}
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
                      } bg-black group-hover:bg-[#ea4343] group-hover:scale-110`}
                    />
                    <span
                      className={`absolute h-1 w-full rounded origin-center transition-all duration-300 top-2.5 ${
                        isMenuOpen ? "opacity-0" : "opacity-100"
                      } bg-black group-hover:bg-[#ea4343] group-hover:scale-110`}
                    />
                    <span
                      className={`absolute h-1 w-full rounded origin-center transition-all duration-300 ${
                        isMenuOpen ? "-rotate-45 top-2.5" : "bottom-0"
                      } bg-black group-hover:bg-[#ea4343] group-hover:scale-110`}
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
          <div className="lg:hidden absolute top-[57px] left-0 right-0 bg-white z-10 shadow-md transition-transform duration-300">
            <ul className="flex flex-col items-center py-4">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <a
                    href={item.href}
                    className="no-underline font-semibold text-black text-lg transition-all duration-300 hover:text-[#ea4343] hover:scale-105"
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
