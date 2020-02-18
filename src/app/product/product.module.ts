import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductService } from "./product.service";
import { ProductListComponent } from "./product-list.component";
import {FormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./product-detail.component";
import { productFilterPipe } from "./product-filter.pipe";





@NgModule({
   imports:[CommonModule, RouterModule, FormsModule],
   declarations:[ProductListComponent, ProductDetailComponent, productFilterPipe],
   exports:[ProductListComponent],
   providers:[ProductService]
   
})

export class ProductModule{}