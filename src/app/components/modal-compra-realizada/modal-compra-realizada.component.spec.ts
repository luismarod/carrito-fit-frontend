import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCompraRealizadaComponent } from './modal-compra-realizada.component';

describe('ModalCompraRealizadaComponent', () => {
  let component: ModalCompraRealizadaComponent;
  let fixture: ComponentFixture<ModalCompraRealizadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCompraRealizadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCompraRealizadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
