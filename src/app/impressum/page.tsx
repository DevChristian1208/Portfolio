"use client";

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Impressum() {
  return (
    <div className="bg-[#3c3c3c] text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-6 max-w-3xl mx-auto pt-32">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>

        <p className="mb-2">
          <strong>Angaben gemäß § 5 TMG:</strong>
        </p>
        <p>
          Christian Seidel
          <br />
          Am Hang 4<br />
          95152 Selbitz
        </p>

        <p className="mt-6 mb-2">
          <strong>Kontakt:</strong>
        </p>
        <p>E-Mail: christian.pressig@web.de</p>

        <p className="mt-6 mb-2">
          <strong>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
        </p>
        <p>
          Christian Seidel
          <br />
          Am Hang 4<br />
          95152 Selbitz
        </p>
      </main>

      <Footer />
    </div>
  );
}
