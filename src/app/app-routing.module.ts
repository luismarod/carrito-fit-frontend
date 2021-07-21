import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CrearCuentaComponent } from './pages/crear-cuenta/crear-cuenta.component';
import { ClientComponent } from './pages/client-pages/client/client.component';
import { HomeComponent } from './pages/client-pages/home/home.component';
import { ShoppingCartComponent } from './pages/client-pages/shopping-cart/shopping-cart.component';
import { AdminComponent } from './pages/admin-pages/admin/admin.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { AdminGuard } from './guards/admin.guard';



const routes: Routes = [
  {
    path: 'client', canActivate: [AuthGuard], component: ClientComponent,
    children: [
      { path: 'home/:es-promo', component: HomeComponent },
      { path: 'shopping-cart/:es-promo/:productos', component: ShoppingCartComponent },
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
    ]
  },
  { path: 'admin', canActivate: [AuthGuard, AdminGuard], component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
