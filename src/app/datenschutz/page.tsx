"use client";

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Datenschutz() {
  return (
    <div className="bg-[#3c3c3c] min-h-screen text-white">
      <Header />

      <main className="p-6 pt-32 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

        <p className="mb-4">
          Der Schutz deiner persönlichen Daten ist mir ein wichtiges Anliegen.
          Nachfolgend informiere ich dich über die Verarbeitung
          personenbezogener Daten im Rahmen dieser Website gemäß den
          Anforderungen der Datenschutz-Grundverordnung (DSGVO).
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">1. Verantwortlicher</h2>
        <p>
          Christian Seidel
          <br />
          Am Hang 4<br />
          95152 Selbitz
          <br />
          E-Mail: christian.pressig@web.de
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">2. Zugriffsdaten</h2>
        <p>
          Beim Aufrufen dieser Website werden durch den Hostinganbieter
          automatisch sogenannte Server-Logfiles erfasst. Diese beinhalten z. B.
          IP-Adresse, Browsertyp, Datum und Uhrzeit des Zugriffs. Diese Daten
          dienen ausschließlich der technischen Überwachung und Optimierung des
          Webbetriebs und werden nicht zur Identifikation verwendet.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">3. Kontaktformular</h2>
        <p>
          Wenn du über das Kontaktformular oder per E-Mail mit mir in Verbindung
          trittst, werden die von dir übermittelten Daten (z. B. Name,
          E-Mail-Adresse, Nachricht) zwecks Bearbeitung deiner Anfrage
          gespeichert. Eine Weitergabe an Dritte erfolgt nicht.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">4. Externe Links</h2>
        <p>
          Auf dieser Website befinden sich Links zu externen Plattformen (z. B.
          GitHub, LinkedIn). Beim Anklicken dieser Links verlässt du diese
          Website. Für die Verarbeitung personenbezogener Daten auf den
          verlinkten Seiten ist ausschließlich der jeweilige Betreiber
          verantwortlich.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">5. Cookies</h2>
        <p>
          Diese Website setzt keine Cookies ein. Sollte dies zukünftig erfolgen
          (z. B. für Sprachauswahl oder Benutzerkomfort), wird ein
          entsprechender Hinweis und eine Einwilligung eingeholt.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">
          6. Rechtsgrundlagen der Verarbeitung
        </h2>
        <p>
          Die Verarbeitung personenbezogener Daten erfolgt auf Grundlage von
          Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
          funktionierenden Webauftritt) bzw. Art. 6 Abs. 1 lit. b DSGVO
          (Vertragserfüllung bei Anfragen).
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">7. Betroffenenrechte</h2>
        <p>
          Du hast das Recht auf Auskunft über deine gespeicherten Daten sowie
          auf Berichtigung, Löschung oder Einschränkung der Verarbeitung. Zudem
          steht dir ein Widerspruchsrecht gegen die Verarbeitung sowie das Recht
          auf Datenübertragbarkeit zu. Beschwerden können an die zuständige
          Datenschutzaufsichtsbehörde gerichtet werden.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-2">
          8. Aktualität und Änderungen
        </h2>
        <p>
          Diese Datenschutzerklärung wird regelmäßig an rechtliche oder
          technische Änderungen angepasst. Die jeweils aktuelle Version ist
          stets auf dieser Seite abrufbar.
        </p>

        <p className="text-sm text-gray-400 mt-8">Stand: Juni 2025</p>
      </main>

      <Footer />
    </div>
  );
}
