import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() languageChange = new EventEmitter<'en' | 'de'>();  // Send the language change to parent component
  menuOpen = false;
  currentLanguage: 'en' | 'de' = 'en';  

  translations: { [lang in 'en' | 'de']: { [key: string]: string } } = {
    en: {
      whyMeTitle: 'Why me',
      whyMeText: 'I am motivated to continuously learn new technologies and develop myself. My ability to solve complex problems and my passion for programming make me a valuable member of your team.',
      iAmTitle: 'I am',
      locatedIn: 'Located in Hof',
      openToRelocate: 'Open to relocate',
      openToRemote: 'Open to work remote',
      contactButton: 'Contact Me',
      skillsTitle: 'My Skills',
      skillsText: 'I am always happy to learn new technologie, just tell me what you need.',
      projectsTitle: 'My Projects',
      joinDescription: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      elPolloLocoDescription: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      githubLink: 'GitHub',
      liveTestLink: 'Live Test',
      contactTitle: 'Contact me',
      contactIntro: 'Still not sure if I am the right person for your project? Contact me so I can reassure you. Let us work together.',
      contactNamePlaceholder: 'Your Name',
      contactEmailPlaceholder: 'Your Email',
      privacyPolicy: 'I\'ve read the privacy policy and agree to the processing of my data as outlined',
      privacyPolicyLink: 'privacy policy',
      contactSubmit: 'Send'
    },
    de: {
      whyMeTitle: 'Warum ich',
      whyMeText: 'Ich bin motiviert, ständig neue Technologien zu lernen und mich weiterzuentwickeln. Meine Fähigkeit, komplexe Probleme zu lösen, und meine Leidenschaft für das Programmieren machen mich zu einem wertvollen Mitglied Ihres Teams.',
      iAmTitle: 'Ich bin',
      locatedIn: 'Ansässig in Hof',
      openToRelocate: 'Umzugsbereit',
      openToRemote: 'Bereit für Remote-Arbeit',
      contactButton: 'Kontaktiere mich',
      skillsTitle: 'Meine Fähigkeiten',
      skillsText: 'Ich lerne gerne neue Technologien, sagen Sie mir einfach, was Sie brauchen.',
      projectsTitle: 'Meine Projekte',
      joinDescription: 'Aufgabenmanager inspiriert vom Kanban-System. Erstellen und organisieren Sie Aufgaben mit Drag-and-Drop-Funktionen, weisen Sie Benutzern und Kategorien zu.',
      elPolloLocoDescription: 'Spring-, Lauf- und Wurfspiel basierend auf einem objektorientierten Ansatz. Hilf Pepe, Münzen und Tabasco-Soße zu finden, um gegen das verrückte Huhn zu kämpfen.',
      githubLink: 'GitHub',
      liveTestLink: 'Live-Test',
      contactTitle: 'Kontaktiere mich',
      contactIntro: 'Immer noch unsicher, ob ich die richtige Person für Ihr Projekt bin? Kontaktieren Sie mich, damit ich Sie überzeugen kann. Lassen Sie uns zusammenarbeiten.',
      contactNamePlaceholder: 'Ihr Name',
      contactEmailPlaceholder: 'Ihre E-Mail',
      privacyPolicy: 'Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten wie beschrieben zu.',
      privacyPolicyLink: 'Datenschutzerklärung',
      contactSubmit: 'Senden'
    }
  };

  setLanguage(language: 'en' | 'de') {
    this.currentLanguage = language;
    this.languageChange.emit(this.currentLanguage);  // Notify the parent component about the language change
    this.updateTexts();
  }

  updateTexts() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach((element) => {
      const key = element.getAttribute('data-key');
      if (key && this.translations[this.currentLanguage][key]) {
        element.textContent = this.translations[this.currentLanguage][key];
      }
    });
  }

  openMenu() {
    this.menuOpen = true;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  ngOnInit() {
    this.updateTexts();  
  }
}
