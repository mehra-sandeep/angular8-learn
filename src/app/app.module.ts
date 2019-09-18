import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule } from '@angular/forms'; //Template Driven Form
import { ReactiveFormsModule } from '@angular/forms'; //Reactive Form
import { HttpClientModule } from '@angular/common/http';

import { PageAddComponent } from "./layout/page/page-add/page-add.component";
import { PageListComponent } from "./layout/page/page-list/page-list.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SlidebarComponent } from "./shared/slidebar/slidebar.component";
import { HomeComponent } from './layout/home/home.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './layout/login/login.component';
import { ProductListComponent } from './layout/product/product-list/product-list.component';
import { ProductAddComponent } from './layout/product/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAddComponent,
    PageListComponent,
    HeaderComponent,
    FooterComponent,
    SlidebarComponent,
    HomeComponent,
    DashboardComponent,
    LoginComponent,
    ProductListComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
