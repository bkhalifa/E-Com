import { NgModule, HostListener } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductListComponent } from "./product/product-list.component";
import { ProductDetailComponent } from "./product/product-detail.component";
import { PageNotFound } from "./page-not-found.component";
import { CategoryComponent } from "./category/category.component";

import { HeroParentCompoent } from "./hero/hero-parent.component";
import { HostListenerComponent } from "./hostlistener/host-listener.component";
import { ComComponent } from "./com/com.component";
import { AppCategoryComponent } from "./category/app-category/app-category.component";



const routes :any = [
   { path: 'accueil', component: AppCategoryComponent },
    { path: 'produits', component: ProductListComponent },
    {path:'produits/:productId', component:ProductDetailComponent} ,
    {path:'demo', component:HeroParentCompoent} ,
    {path:'comm-component', component:ComComponent} ,
    {path:'host-listner', component:HostListenerComponent} ,
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    {path:'**', component:PageNotFound}
    ];


@NgModule({
  imports:[RouterModule.forRoot(routes) ],
   exports:[RouterModule]

})
export class AppRouterModule{}

