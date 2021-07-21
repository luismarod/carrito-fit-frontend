import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-compra-realizada',
  templateUrl: './modal-compra-realizada.component.html',
  styleUrls: ['./modal-compra-realizada.component.scss']
})
export class ModalCompraRealizadaComponent implements OnInit {

  @Input() esPromo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
