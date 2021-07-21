import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  verVip: boolean = false;
  verNoVip: boolean = false;
  filtroMes: boolean = false;
  mesSeleccionado: string = ''


  meses = [
    { value: '01', viewValue: 'Enero' },
    { value: '02', viewValue: 'Febrero' },
    { value: '03', viewValue: 'Marzo' },
    { value: '04', viewValue: 'Abril' },
    { value: '05', viewValue: 'Mayo' },
    { value: '06', viewValue: 'Junio' },
    { value: '07', viewValue: 'Julio' },
    { value: '08', viewValue: 'Agosto' },
    { value: '09', viewValue: 'Septiembre' },
    { value: '10', viewValue: 'Octubre' },
    { value: '11', viewValue: 'Noviembre' },
    { value: '12', viewValue: 'Diciembre' },

  ];

  usuarios: any

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClientes().subscribe(res => {
      this.usuarios = res;
    })
  }

  onVerVip() {
    this.filtroMes = true;
    this.verVip = true;
    this.verNoVip = false;

    this.clientService.getClientesVip().subscribe(res => {
      this.usuarios = res;
    })
  }

  onVerNoVip() {
    this.filtroMes = true;
    this.verNoVip = true;
    this.verVip = false;

    this.clientService.getClientesNoVip().subscribe(res => {
      this.usuarios = res;
    })
  }

  onVerTodos() {
    this.verNoVip = false;
    this.verVip = false;
    this.filtroMes = false;

    this.clientService.getClientes().subscribe(res => {
      this.usuarios = res;
    })
  }

  verMes(mes: string) {
    if (this.verVip) {
      this.clientService.getClientesVipByMes(mes).subscribe(res => {
        this.usuarios = res;
      })
    } else {
      this.clientService.getClientesNoVipByMes(mes).subscribe(res => {
        this.usuarios = res;
      })
    }
  }

}
