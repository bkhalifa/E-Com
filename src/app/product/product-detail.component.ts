import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./product.service";
import { Product } from "./product";
import { JsonPipe } from "@angular/common";

@Component({
    moduleId:module.id,
    selector:'detail',
    templateUrl:'./porduit-detail.component.html'
})
export class ProductDetailComponent implements OnInit{
   title:string;


   constructor (private _productService:ProductService ,
     private _route:ActivatedRoute, private _myrouter:Router){}

     produit : any;
     goBack(){
      this._myrouter.navigate(['/produits']);
      }
    ngOnInit(): void {
      let productId = this._route.snapshot.params['productId'];
      this.title = `details  ${productId}`;


      this._productService.GetproduitDetail(productId)
      .subscribe(response =>
        {
          this.produit= response; // impoprtant
        });

    }
  }
