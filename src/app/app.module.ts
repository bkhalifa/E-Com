import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent }  from './app.component';
import { HomeModule } from './home/home.module';
import { ProductModule } from './product/product.module';
import { HttpModule } from '@angular/http';
import { PageNotFound } from './page-not-found.component';
import { AppRouterModule } from './app-router.module';
import { CategoryModule } from "./category/category.module";
import { HeroModule } from './hero/hero.module';
import { ComModule } from './com/com.module';
import { HostModule } from './hostlistener/host.module';
import { ParentComModule } from './parent-comp/parentcom.module';
import { PrcaModule } from './pr-ca/pr-ca.module';
import { AddProductModule } from './add-product/add-product.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_BASE_HREF } from '@angular/common';
import { ObserverModule } from './observer/observer.module';



@NgModule({
  imports: [BrowserModule,
    HttpModule,
    ProductModule,
    HomeModule,
    CategoryModule,
    HeroModule,
    ComModule,
    ParentComModule,
    PrcaModule,
    AddProductModule,
    HostModule,
    ObserverModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
  ],
  declarations: [AppComponent, PageNotFound],
  bootstrap: [AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule { }
