import { Component, OnInit, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RandomuserService } from '../../services/randomuser.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-persona',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent implements OnInit {
  private readonly randomuserService = inject(RandomuserService);
  
  readonly user = signal<User | null>(null);
  readonly loading = signal<boolean>(false);
  readonly error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadNewUser();
  }

  loadNewUser(): void {
    this.loading.set(true);
    this.error.set(null);
    this.randomuserService.getRandomUser().subscribe({
      next: (user) => {
        if (user) {
          this.user.set(user);
        }
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error loading user:', err);
        this.error.set('No se pudo cargar el usuario. Por favor, intente de nuevo.');
        this.loading.set(false);
      }
    });
  }
}
