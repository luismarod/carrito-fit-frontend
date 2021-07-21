import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  productos: any = [];
  productosString: string = '';
  verDetalle = false;
  esPromo = '';

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.productos = [];
    this.productosString = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.esPromo = (param['es-promo']);
    })
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
  }

  deleteProduct(id: any) {
    this.productos = this.productos.filter((producto: { id: any; }) => producto.id != id)
  }



}



