import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Card, UpdateCardDto, createCardDto } from '../models/card.model';
import { checkToken } from '../interceptors/token.interceptor';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  create(dto: createCardDto) {
    return this.http.post<Card>(`${this.apiUrl}/api/v1/cards`, dto, {
      context: checkToken()
    });
  }

  update(id: Card['id'], changes: UpdateCardDto) {
    return this.http.put<Card>(`${this.apiUrl}/api/v1/cards/${id}`, changes, {
      context: checkToken()
    });
  }
}
