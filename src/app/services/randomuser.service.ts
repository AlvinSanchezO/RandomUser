import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserResult } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RandomuserService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://randomuser.me/api/';

  getRandomUser(): Observable<User> {
    return this.http.get<UserResult>(this.apiUrl).pipe(
      map(response => response.results[0])
    );
  }
}

