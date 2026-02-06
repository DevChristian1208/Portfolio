"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isImpressum = pathname === "/impressum";
  const isDatenschutz = pathname === "/datenschutz";

  return (
    <footer className="bg-[#2f2f2f] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-mono font-bold text-[#ea4343]">
          &lt;CS&gt;
        </div>

        {!(isImpressum || isDatenschutz) && (
          <ul className="flex gap-6 text-sm text-gray-300">
            <li>
              <Link
                href="/impressum"
                className="hover:text-[#ea4343] transition"
              >
                Impressum
              </Link>
            </li>
            <li>
              <Link
                href="/datenschutz"
                className="hover:text-[#ea4343] transition"
              >
                Privacy policy
              </Link>
            </li>
          </ul>
        )}

        <div className="flex gap-4">
          <a href="mailto:christian.pressig@web.de">
            <img
              src="/Email button.png"
              alt="Email"
              className="w-6 h-6 cursor-pointer transition-all duration-100 hover:drop-shadow-[0_0_10px_#FF6347]"
            />
          </a>
          <a href="https://github.com/DevChristian1208" target="_blank">
            <img
              src="/Github button.png"
              alt="GitHub"
              className="w-6 h-6 cursor-pointer transition-all duration-100 hover:drop-shadow-[0_0_10px_#FF6347]"
            />
          </a>
          <a
            href="https://de.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/Linkedin button.png"
              alt="LinkedIn"
              className="w-6 h-6 cursor-pointer transition-all duration-100 hover:drop-shadow-[0_0_10px_#FF6347]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
