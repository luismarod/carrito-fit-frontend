import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl: string = 'http://localhost:8080/api'

  constructor(private http: HttpClient) { }

  getClientes(): Observable<Usuario[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuarios`);
  }

  getClientesVip(): Observable<Usuario[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuarios/usuarios-vip`);
  }

  getClientesNoVip(): Observable<Usuario[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuarios/usuarios-novip`);
  }

  getClientesVipByMes(mes: string): Observable<Usuario[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuarios/usuarios-vip-mes/${mes}`);
  }

  getClientesNoVipByMes(mes: string): Observable<Usuario[]> {
    return this.http.get<any[]>(`${this.baseUrl}/usuarios/usuarios-novip-mes/${mes}`);
  }
}
