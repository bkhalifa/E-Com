import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { ProductListComponent } from './product/product-list.component';
import { ProductModule } from './product/product.module';
import { HttpModule } from '@angular/http';
import { PageNotFound } from './page-not-found.component';
import { ProductDetailComponent } from './product/product-detail.component';



@NgModule({
  imports:      [ BrowserModule, HttpModule,
                      ProductModule, 
                      HomeModule,
                    RouterModule.forRoot([
                      { path: 'accueil', component: HomeComponent },
                      { path: 'produits', component: ProductListComponent },
                      {path:'produits/:productId', component:ProductDetailComponent} ,      
                      { path: '', redirectTo: 'accueil', pathMatch: 'full' },
                      {path:'**', component:PageNotFound}       
                      ])
                      ],


  declarations: [ AppComponent,PageNotFound ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
