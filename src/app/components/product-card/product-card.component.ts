import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() id: any;
  @Input() nombre = '';
  @Input() precio: number = 0;
  urlImg: string = ''


  @Output() newProductEvent = new EventEmitter<Object>();

  addNewProduct() {
    let producto = {
      id: this.id,
      nombre: this.nombre,
      precio: this.precio,
      cantidad: 1
    }
    this.newProductEvent.emit(producto)
  }

  constructor() {

  }

  ngOnInit(): void {
    this.urlImg = `http://localhost:8080/api/productos/img/${this.id}`
  }


}
