import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  baseUrl: string = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  postTicket(ticket: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/tickets/crear-ticket`, ticket)
  }


}
