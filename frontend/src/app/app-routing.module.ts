import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { FoodDetailComponent } from './components/pages/food-detail/food-detail.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { authGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { AboutComponent } from './components/pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:searchTerm',
    component: MenuComponent
  },
  {
    path:"menu",
    component:MenuComponent
  },
  {
    path:"food-detail/:id",
    component:FoodDetailComponent
  },
  {
    path:"cart-page",
    component:CartPageComponent
  },
  {
    path:"login",
    component:LoginComponent
  }
  ,
  {
    path:"register",
    component:RegisterComponent
  }
  ,
  {
    path:"checkout",
    component:CheckoutPageComponent,
    canActivate:[authGuard]
  }
  ,
  {
    path:"order-payment",
    component:PaymentPageComponent,
    canActivate:[authGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
