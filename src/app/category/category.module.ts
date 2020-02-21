import { NgModule, OnInit } from "@angular/core";
import { CategoryService } from "./category.service";

import { CategoryComponent } from "./category.component";
import { CommonModule } from "@angular/common";
import { ProductCategoryComponent } from "./product-category.component";
import { CategFilterPipe } from "./category-filter.pipe";
import { FormsModule } from "@angular/forms";
import { AppCategoryComponent } from "./app-category/app-category.component";




@NgModule({
imports:[CommonModule, FormsModule],
declarations:[AppCategoryComponent,CategoryComponent, ProductCategoryComponent, CategFilterPipe],
exports:[AppCategoryComponent,CategoryComponent, ProductCategoryComponent],
providers:[CategoryService]
})
export class CategoryModule {}
