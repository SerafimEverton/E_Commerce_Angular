import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BookstoryAppComponent } from './components/bookstory-app/bookstory-app.component';
import { FiltersComponent } from './components/bookstory-app/filters/filters.component';
import { ProductListComponent } from './components/bookstory-app/product-list/product-list.component';
import { ProductItemComponent } from './components/bookstory-app/product-list/product-item/product-item.component';
import { BooksService } from './components/bookstory-app/product-list/product-list.component.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BookstoryAppComponent,
    FiltersComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
