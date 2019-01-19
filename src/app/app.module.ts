import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppComponent} from './app.component';
import {AppProductTitleComponent} from './app-product-title/app-product-title.component';
import {AppProductListComponent} from './app-product-list/app-product-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProductsRepository} from './services/ProductsRepository';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppProductTitleComponent,
    AppProductListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
