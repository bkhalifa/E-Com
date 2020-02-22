import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddProductComponent } from "./add-product.component";
import { ProductService } from "../product/product.service";
import { ListCategoryComponent } from "./list-category/list-category.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports:[CommonModule, FormsModule],
  declarations:[AddProductComponent, ListCategoryComponent],
  exports:[AddProductComponent, ListCategoryComponent],
  providers:[ProductService]
})
export class AddProductModule{}
