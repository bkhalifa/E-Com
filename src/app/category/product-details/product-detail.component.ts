import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CategoryService } from "../category.service";
import { Product } from "../../product/product";

@Component({
  moduleId:module.id,
  selector:'prodcut-detail',
  templateUrl:'./product-detail.component.html'
})

export class PorductDetailsComponent implements OnInit{
  constructor(private _categoryService:CategoryService,
              private _route :ActivatedRoute){}


  product : Product;

  ngOnInit(): void {
 let productID = this._route.snapshot.params['productId']

 this._categoryService.GetByProductById(productID)
 .subscribe(
   res =>
   {
     this.product = res
   },
   err =>{
     console.error(`error occured${err}`)
   }


 )


  }





}
