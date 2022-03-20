import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPokemonCards(): Observable<any> {
    return this.http.get<any>('https://api.pokemontcg.io/v2/cards', {
      params: {
        pageSize: 32,
      }
    }).pipe(
      map(({ data }) => data)
    )
  }

  getPokemonCardById(id): Observable<any> {
    return this.http.get<any>(`https://api.pokemontcg.io/v2/cards/${id}`).pipe(
      map(({ data }) => data)
    )
  }

  savePokemonChanges(id: number, value: any): Observable<any> {
    return this.http.patch(`https://api.pokemontcg.io/v2/cards/${id}`, value);
  }


}
