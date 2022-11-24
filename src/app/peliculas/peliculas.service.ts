import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeliculasPostGet } from './pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + 'peliculas';

  public postGet(): Observable<PeliculasPostGet>{
    return this.http.get<PeliculasPostGet>(`${this.apiURL}/postget`);
  }
}
