
import { Injectable } from "@angular/core";
import {Http,Headers} from '@angular/http';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Product } from "./product";
import { HttpHeaders, HttpParams } from "@angular/common/http";


@Injectable()
export class ProductService{

    constructor(private _http:Http){}

    GetProduits(){
        return this._http.get('http://localhost:8081/api/product')
        .do(x =>console.log(x))
        .map(produits =>produits.json())
    }

    GetproduitDetail(productId:number){

        var model = this._http.get('http://localhost:8081/api/product/details?productId='+ productId)
         .map(produit =>  produit.json());
          return model;
    }

    GetCategries() {
      return this._http.get('http://localhost:8081/api/Category')
      //  .do(x =>console.log(x))
      .map(categories => categories.json())
      }


      GetValues() {
        return this._http.get('http://localhost:8656/api/Values')

        .map(values => values.json())
        }



    PostProduct(model:any){

       this._http.post('http://localhost:8081/api/Product/postproduct',model)
       .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
    }



}
