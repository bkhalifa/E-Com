import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class prcaService{
/**
 *
 */
constructor(private _http: Http) {}
GetCategries() {
  return this._http.get('http://localhost:8081/api/Category')
  //  .do(x =>console.log(x))
  .map(categories => categories.json())
  }

  GetProductategries(categoryId?: number) {
    return this._http.get('http://localhost:8081/api/Product/productCategory?categoryId='+categoryId)
      // .do(x =>console.log(x.json()))
      .map(produits => produits.json())
    }

}
