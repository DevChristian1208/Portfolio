import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';  // Stelle sicher, dass RouterModule importiert ist
import { ViewportScroller } from '@angular/common';  // Für das Scroll-Verhalten
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MyskillsComponent } from './myskills/myskills.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { WhymeComponent } from './whyme/whyme.component';
import { ReferencessectionComponent } from './referencessection/referencessection.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { HeaderComponent } from './shared/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,  // Stelle sicher, dass RouterModule hier importiert ist
    HeaderComponent,
    LandingPageComponent, 
    FooterComponent, 
    MyskillsComponent, 
    MyprojectsComponent, 
    WhymeComponent, 
    ReferencessectionComponent, 
    ContactmeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio';
  isImprintPage: boolean = false;  // Zustand für die Imprint-Seite

  constructor(private router: Router, private viewportScroller: ViewportScroller) {
    // Überwache die Routenänderungen
    this.router.events.subscribe((event: any) => {
      // Überprüfe, ob der Benutzer auf der /imprint Seite ist
      this.isImprintPage = this.router.url === '/imprint';

      // Überprüfen, ob die Navigation beendet ist
      if (event instanceof NavigationEnd) {
        // Scroll zur obersten Position (0, 0) bei jedem Navigationswechsel
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });
  }
}
