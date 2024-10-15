// src/app/imprint/imprint.component.ts
import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle('Impressum & Datenschutzerklärung - Christian Seidel');
    this.metaService.updateTag({ name: 'description', content: 'Impressum und Datenschutzerklärung von Christian Seidel, Frontend Developer.' });
    // Weitere Meta-Tags nach Bedarf hinzufügen
  }

}
