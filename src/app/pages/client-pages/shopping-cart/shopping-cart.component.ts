import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../../../services/ticket.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit, OnDestroy {

  productos: any = [];
  productosString: string = ''
  totalPrecio = 0;
  cantTotalProd = 0;
  descuento = 0;
  subTotal = 0;
  comprado: boolean = false;

  vip: boolean = false;
  esPromo: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {

      this.productos = JSON.parse(param['productos']);
      this.esPromo = JSON.parse((param['es-promo']));

      this.calcularMonto(this.productos);
    })
  }

  ngOnDestroy(): void {
    this.productos = [];
  }

  agregarProducto(producto: any) {
    const p = this.productos.find((element: { id: any; }) => producto.id === element.id);
    if (p) {
      this.productos.forEach((element: { id: any; cantidad: number; }) => {
        if (element.id === p.id) { element.cantidad++ }
      })
    } else {
      this.productos.push(producto);
    }

    this.productosString = JSON.stringify(this.productos);
    this.calcularMonto(this.productos);
  }

  onMinusProduct(id: any) {
    this.productos.forEach((element: { id: any; cantidad: number; }) => {
      if (element.id == id) {
        if (element.cantidad > 0) {
          element.cantidad--;
        }

        if (element.cantidad == 0) {
          this.deleteProduct(element.id)
        }
      }
    })

    this.calcularMonto(this.productos)
  }

  deleteProduct(id: any) {
    this.productos = this.productos.filter((producto: { id: any; }) => producto.id != id)
    this.calcularMonto(this.productos);
  }

  calcularMonto(productos: any[]) {
    this.totalPrecio = 0;
    this.cantTotalProd = 0;
    this.descuento = 0;
    this.subTotal = 0;

    this.productos.forEach((element: { precio: number; cantidad: number; }) => {
      const elementPrecio = (element.precio * element.cantidad)
      this.cantTotalProd = this.cantTotalProd + element.cantidad
      this.subTotal = this.subTotal + elementPrecio
    });

    if (this.cantTotalProd == 4) {
      this.descuento = this.subTotal / 4;
      this.totalPrecio = this.subTotal - this.descuento;
    }

    if (this.cantTotalProd > 10) {
      if (this.vip) {
        let ppp = this.productos[0].precio
        this.productos.forEach((element: { precio: number; }) => {
          if (element.precio < ppp) {
            ppp = element.precio
          }
        })
        this.descuento = ppp + 500
      }
      else if (this.esPromo && !this.vip) {
        this.descuento = 300;
      } else {
        this.descuento = 100;
      }


    }
    this.totalPrecio = this.subTotal - this.descuento;
  }

  onComprar() {
    const ticket = {

      usuario: {
        id: 2,
        nombre: "Wilmer",
        apellido: "Rodriguez",
        email: "wilmer@mail.com",
        vip: false
      },
      productos: this.productos,
      monto: this.totalPrecio,
      descuento: this.descuento

    }

    this.ticketService.postTicket(ticket).subscribe(res => {
      console.log(res);
    })

    this.comprado = true;
  }



}
