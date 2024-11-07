import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1> Curso de angular </h1>
    <h2> Components </h2>
  
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeiro-projeto-latest';
}
