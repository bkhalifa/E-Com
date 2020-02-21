import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CategoryService } from "./category.service";
import { ICategory } from "./category";

import { ProductCategoryComponent } from "./product-category.component";

import { Product } from "../product/product";

@Component({
  moduleId: module.id,
  selector: 'category',
  templateUrl: './category.component.html',
  providers: [ProductCategoryComponent]
  // styleUrls:['./catogory.Component.css']
})

export class CategoryComponent implements OnInit {
  constructor(private _categorySvc: CategoryService) { }


  categories: ICategory[];
  produits: Product[];
  categoryId:number;

  @Output()  notifyProduct  = new EventEmitter<Product>();

  ngOnInit(): void {
    this._categorySvc.GetCategries()
      .subscribe(
        res => this.categories = res,
        err => console.log(err.status)
      )


  }

  GetProductCategries(categoryId: number) {
    this.categoryId=categoryId;
    this._categorySvc.GetProductategries(categoryId).subscribe(
      res => this.produits = res,
      err => console.log(err.status)
    )
  }


}
