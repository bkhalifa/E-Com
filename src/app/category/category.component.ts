import { Component, OnInit, Input } from "@angular/core";
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

  categoryId:number = 14;

@Input() categ : ProductCategoryComponent;


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
     res  => this.categ.produits = res,
      err => console.log(err.status)
    )
  }


}
