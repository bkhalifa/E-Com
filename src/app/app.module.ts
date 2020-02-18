import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { HttpModule } from '@angular/http';
import { PageNotFound } from './page-not-found.component';
import { AppRouterModule } from './app-router.module';



@NgModule({
  imports:      [ BrowserModule,
                  HttpModule,
                 ProductModule,
                  HomeModule,
                  AppRouterModule,
                      ],
  declarations: [ AppComponent, PageNotFound ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
