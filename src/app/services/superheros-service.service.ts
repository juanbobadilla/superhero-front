import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HeroResponse } from './../models/hero.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperherosServiceService {

  private apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  /**
   * @function getDataSuperHero
   * @param page 
   * @param size 
   * @returns 
   */
  getDataSuperHeroPaginate(page: number, size: number): Observable<HeroResponse> {
    return this.http.get<HeroResponse>(`${this.apiUrl}?size=${size}&page=${page}`);
  }

}
