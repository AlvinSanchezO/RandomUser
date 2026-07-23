import { Component, signal } from '@angular/core';
import { PersonaComponent } from './components/persona/persona.component';

@Component({
  selector: 'app-root',
  imports: [PersonaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-randomuser');
}
