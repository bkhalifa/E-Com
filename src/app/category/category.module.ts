import { NgModule, OnInit } from "@angular/core";
import { CategoryService } from "./category.service";

import { CategoryComponent } from "./category.component";
import { CommonModule } from "@angular/common";
import { ProductCategoryComponent } from "./product-category.component";
import { CategFilterPipe } from "./category-filter.pipe";
import { FormsModule } from "@angular/forms";



@NgModule({
imports:[CommonModule, FormsModule],
declarations:[CategoryComponent, ProductCategoryComponent, CategFilterPipe],
exports:[CategoryComponent, ProductCategoryComponent],
providers:[CategoryService]
})
export class CategoryModule {}
