import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProductListComponent } from "./product/product-list.component";
import { ProductDetailComponent } from "./product/product-detail.component";
import { PageNotFound } from "./page-not-found.component";



const routes :any = [
   { path: 'accueil', component: HomeComponent },
    { path: 'produits', component: ProductListComponent },
    {path:'produits/:productId', component:ProductDetailComponent} ,
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    {path:'**', component:PageNotFound}
    ];


@NgModule({
  imports:[RouterModule.forRoot(routes) ],
   exports:[RouterModule]

})
export class AppRouterModule{}

