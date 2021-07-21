import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  Logged: boolean = false;
  usuario: Usuario = { email: '', password: '', admin: false, vip: false, fecha: '' };
  usuarios = [
    {
      email: "correousuarioclientevip@mail.com",
      vip: false,
      admin: false,
      password: "correousuario1",
      fecha: ''
    },
    {
      email: "correousuarioclientenovip@mail.com",
      vip: true,
      admin: false,
      password: "correousuario1",
      fecha: ''
    },
    {
      email: "correousuarioadmin@mail.com",
      admin: true,
      vip: true,
      password: "correousuario2",
      fecha: ''
    },

  ]

  constructor() { }

  login(usuarioInput: any) {
    const u = this.usuarios.find(usuario => usuario.email == usuarioInput.email)

    if (u) {
      if (u.password == usuarioInput.password) {
        this.Logged = true
        this.usuario = u;
      } else this.Logged = false;

    } else this.Logged = false

  }

  getUsuarioAutenticado() {
    return this.usuario;
  }

  isLogged() {
    if (this.Logged) {
      return true;
    } else return false;
  }

  isAdmin() {
    if (this.usuario.admin) {
      return true;
    } else return false;
  }
}
