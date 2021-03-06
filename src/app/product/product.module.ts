import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductService } from "./product.service";
import { ProductListComponent } from "./product-list.component";
import {FormsModule} from '@angular/forms';
import { RouterModule } from "@angular/router";
import { ProductDetailComponent } from "./product-detail.component";
import { productFilterPipe } from "./product-filter.pipe";
import { ProductSummaryComponent } from "./product-summary.component";
import { CollaseWellComponent } from "../shared/collapse-well.component";






@NgModule({
   imports:[CommonModule, RouterModule, FormsModule],
   declarations:[ProductListComponent, ProductDetailComponent, productFilterPipe, ProductSummaryComponent, CollaseWellComponent],
   exports:[ProductListComponent, CollaseWellComponent],
   providers:[ProductService]

})

export class ProductModule{}
