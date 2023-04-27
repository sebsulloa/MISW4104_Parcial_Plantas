import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Plant } from './plant';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PlantService {
  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiUrl);
  }
}
