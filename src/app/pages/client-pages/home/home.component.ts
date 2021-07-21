import { Component, OnInit, ViewChild } from '@angular/core';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/products.service';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild(CartComponent)
  cart!: CartComponent;

  productos: Producto[] = []

  esPromo = '';

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductos().subscribe(res => {
      this.productos = res;
    })
  }

  addProductToCart(product: any) {
    this.cart.agregarProducto(product);

  }

}
