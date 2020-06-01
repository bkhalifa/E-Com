import { NgModule, OnInit } from "@angular/core";
import { CategoryService } from "./category.service";

import { CategoryComponent } from "./category.component";
import { CommonModule } from "@angular/common";
import { ProductCategoryComponent } from "./product-category.component";
import { CategFilterPipe } from "./category-filter.pipe";
import { FormsModule } from "@angular/forms";
import { AppCategoryComponent } from "./app-category/app-category.component";
import { RouterModule } from "@angular/router";
import { PorductDetailsComponent } from "./product-details/product-detail.component";






@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [AppCategoryComponent, CategoryComponent,
    ProductCategoryComponent, PorductDetailsComponent, CategFilterPipe],
  exports: [AppCategoryComponent,
    CategoryComponent,
    PorductDetailsComponent,
    ProductCategoryComponent

   ],
  providers: [CategoryService

   ]
})
export class CategoryModule { }
