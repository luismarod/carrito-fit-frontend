import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  @Input() nombre: string = ''
  @Input() apellido: string = ''
  @Input() email: string = ''
  @Input() vip: boolean = false



  constructor() { }

  ngOnInit(): void {
  }

}
