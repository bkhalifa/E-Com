import { Component, Input, OnChanges } from "@angular/core";
import { Product } from "../product/product";
import { CategoryService } from "./category.service";
import { CategoryComponent } from "./category.component";



@Component({
  moduleId:module.id,
  selector:'product-category',
  templateUrl:'./product-category.component.html'
})
export class ProductCategoryComponent {


  produits : Product[];
  constructor(private _categorySvc :CategoryService){}

  searchTerm :string='';
   id :number;



  ngOnInit(): void {
     this._categorySvc.GetProductategries(14)
      .subscribe(
        res => this.produits = res,
        err=> console.log(err.status)
       );
  }





}
