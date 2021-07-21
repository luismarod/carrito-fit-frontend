import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { AuthService } from '../../services/auth.service';






@Component({
  selector: 'formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.scss']
})
export class FormularioUsuarioComponent implements OnInit {

  usuario: Usuario | undefined
  crearCuenta: boolean = false;
  diasPromocion: number[] = [2, 8, 10, 22]
  esPromo: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      return (date === 2 || date === 8 || date === 10 || date === 22) ? 'example-custom-date-class' : '';
    }

    return '';
  }
  ngOnInit(): void {



    if (this.router.url === "/crear-cuenta") {
      this.crearCuenta = true;
    }
  }

  async iniciarCesion(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const usuario = {
      email: form.controls.email.value,
      password: form.controls.password.value
    }

    await this.authService.login(usuario);

    this.esPromo = (this.diasPromocion.indexOf(form.controls.fecha.value.getDate()) > 0) ? true : false;
    const promoString = this.esPromo.toString();

    if (this.authService.isAdmin()) {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/client/home', promoString]);
    }




  }

}




