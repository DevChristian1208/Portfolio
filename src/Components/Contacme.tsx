"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setSuccessMessage(
        res.ok
          ? data.message || "Mail wurde gesendet!"
          : data.error || "Fehler beim Senden."
      );
      setVisible(true);
    } catch {
      setSuccessMessage("Fehler beim Senden. Bitte versuche es später erneut.");
      setVisible(true);
    }

    form.reset();
    setTimeout(() => setVisible(false), 1500);
    setTimeout(() => setSuccessMessage(""), 2000);
  };

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[#2e2e48] text-white py-24 px-4"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,.28),transparent_70%)] blur-3xl animate-aurora" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,.22),transparent_70%)] blur-3xl animate-aurora-reverse" />
      </div>

      {successMessage && (
        <div className="fixed bottom-16 left-0 w-full flex justify-center px-4 z-50">
          <div
            className={`transition-opacity duration-500 w-[80%] ${
              visible ? "opacity-100" : "opacity-0"
            } bg-gradient-to-r from-indigo-500 to-cyan-500 text-white p-4 rounded-md shadow-lg text-center`}
          >
            {successMessage}
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm block mb-2">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gradient-bold">
            Contact me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 text-gray-300">
            <p>
              Interesse an einer Zusammenarbeit oder einer Junior-Position im
              Frontend? Ich freue mich über eine Kontaktaufnahme.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 ring-1 ring-white/10">
                  <Image src="/call.svg" alt="call" width={22} height={22} />
                </div>
                <div>
                  <span className="block text-sm text-gray-400">Call me</span>
                  <h3 className="text-lg font-bold">+49 1756453064</h3>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 ring-1 ring-white/10">
                  <Image src="/message.svg" alt="email" width={22} height={22} />
                </div>
                <div>
                  <span className="block text-sm text-gray-400">Email</span>
                  <h3 className="text-lg font-bold">
                    <a
                      href="mailto:christian.pressig@web.de"
                      className="hover:text-indigo-400 transition-all duration-200"
                    >
                      christian.pressig@web.de
                    </a>
                  </h3>
                </div>
              </li>
            </ul>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="bg-[#2f2f2f]/80 p-4 rounded-lg text-white placeholder-gray-400 ring-1 ring-white/10 transition-shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Your Email"
                className="bg-[#2f2f2f]/80 p-4 rounded-lg text-white placeholder-gray-400 ring-1 ring-white/10 transition-shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />

              <input
                name="phone"
                type="tel"
                placeholder="Your Phone"
                className="bg-[#2f2f2f]/80 p-4 rounded-lg text-white placeholder-gray-400 ring-1 ring-white/10 transition-shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 md:col-span-2"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your message here"
              rows={5}
              className="w-full bg-[#2f2f2f]/80 p-4 rounded-lg text-white placeholder-gray-400 ring-1 ring-white/10 transition-shadow focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-cyan-500 bg-[length:200%_100%] bg-left hover:bg-right text-white font-bold px-6 py-3 rounded-md shadow-[0_10px_30px_-8px_rgba(99,102,241,0.6)] transition-all duration-500 hover:shadow-[0_14px_40px_-6px_rgba(99,102,241,0.75)] hover:-translate-y-0.5 flex items-center gap-2"
            >
              Absenden
              <Image src="/send.svg" alt="send" width={18} height={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
