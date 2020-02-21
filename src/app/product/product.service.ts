
import { Injectable } from "@angular/core";
import {Http} from '@angular/http';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


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
}
