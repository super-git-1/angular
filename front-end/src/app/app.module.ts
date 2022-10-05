import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
