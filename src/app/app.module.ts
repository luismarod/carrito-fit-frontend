import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormularioUsuarioComponent } from './components/formulario-usuario/formulario-usuario.component';
import { FormsModule } from '@angular/forms';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { AdminComponent } from './pages/admin-pages/admin/admin.component';
import { ClientComponent } from './pages/client-pages/client/client.component';
import { ShoppingCartComponent } from './pages/client-pages/shopping-cart/shopping-cart.component';
import { HomeComponent } from './pages/client-pages/home/home.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalCompraRealizadaComponent } from './components/modal-compra-realizada/modal-compra-realizada.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { MatSelectModule } from '@angular/material/select';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FormularioUsuarioComponent,
    CrearCuentaComponent,
    AdminComponent,
    ClientComponent,
    ShoppingCartComponent,
    HomeComponent,
    ProductCardComponent,
    CartComponent,
    CartItemComponent,
    ModalCompraRealizadaComponent,
    UsuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
