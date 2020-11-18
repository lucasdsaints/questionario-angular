import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

import DynamicQuestion from '../models/DynamicQuestion';

@Injectable({
  providedIn: 'root'
})
export class ProfileQuestioraireService {
  private baseURL = 'https://my-json-server.typicode.com/lucasdsaints/questionario-angular';

  constructor(private http: HttpClient) { }

  getQuestions(): Promise<DynamicQuestion[]> {
    return this.http.get<DynamicQuestion[]>(`${this.baseURL}/dynamic_questions`)
      .pipe(catchError(() => []))
      .toPromise();
  }

  getSelecOptions() {
    return this.http.get<string[]>(`${this.baseURL}/select_options`)
      .pipe(catchError(() => []))
      .toPromise();
  }
}
