import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component'; // Importiere die ImprintComponent

export const routes: Routes = [
  { path: 'imprint', component: ImprintComponent }, // Imprint-Seite
  { path: '**', redirectTo: '' } // Fallback-Route
];