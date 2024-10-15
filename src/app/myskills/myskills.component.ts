import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-myskills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent {
   skills = [
    './assets/Icons Skills.png',
    './assets/Icons Skills (1).png',
    './assets/Icons Skills (2).png',
    './assets/Icons Skills (3).png',
    './assets/Icons Skills (4).png',
    './assets/Icons Skills (5).png',
    './assets/Icons Skills (6).png',
    './assets/Icons Skills (7).png',
    './assets/Icons Skills (8).png',
    './assets/Icons Skills (9).png'
  ];
}
