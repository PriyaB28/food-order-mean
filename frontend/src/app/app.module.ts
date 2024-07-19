import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './components/pages/home/home.component';
import { StarRatingModule } from 'angular-star-rating';
import { SearchComponent } from './components/partials/search/search.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { FoodDetailComponent } from './components/pages/food-detail/food-detail.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { HttpClientModule } from  '@angular/common/http';
import { NgxMasonryModule } from 'ngx-masonry';
import { LoginComponent } from './components/pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    MenuComponent,
    FooterComponent,
    FoodDetailComponent,
    CartPageComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule ,
    StarRatingModule.forRoot(),
    HttpClientModule ,
    NgxMasonryModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
