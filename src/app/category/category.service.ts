import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Product } from "../product/product";


@Injectable()
export class CategoryService{

  constructor(private _http : Http){}


GetCategries() {
return this._http.get('http://localhost:8081/api/Category')
//  .do(x =>console.log(x))
.map(categories => categories.json())
}

GetProductategries(categoryId?: number) {
  return this._http.get('http://localhost:8081/api/Product/productCategory?categoryId='+categoryId)
    .do(x =>console.log(x.json()))
    .map( produits => produits.json()
     )
  }


  DeleteProduct(prodcutId:any){

    this._http.delete('http://localhost:8656/api/Product/deleteproduct?prodcutId='+ prodcutId)
    .subscribe(
     res => {
       console.log(res);
     },
     err => {
       console.log("Error occured");
     }
   );
 }

 GetByProductById = (prodcutId:number) => {
 return  this._http.get('http://localhost:8081/api/Product/details?productId='+ prodcutId)
   .map(product=> product.json())

 }
}
