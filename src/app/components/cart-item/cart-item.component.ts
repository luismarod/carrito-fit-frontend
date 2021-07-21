import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() id: any;
  @Input() nombre = ''
  @Input() precio: number = 0
  @Input() cantidad: number = 0
  urlImg: string = ''

  @Output() onMinusProduct = new EventEmitter<string>();
  @Output() onPlusProduct = new EventEmitter<Object>();
  @Output() deleteProduct = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
    this.urlImg = `http://localhost:8080/api/productos/img/${this.id}`
  }

  onPlus() {
    const producto = {
      id: this.id
    }
    this.onPlusProduct.emit(producto);
  }

  onMinus() {
    this.onMinusProduct.emit(this.id);

  }

  onDelete() {
    this.deleteProduct.emit(this.id);
  }

}
