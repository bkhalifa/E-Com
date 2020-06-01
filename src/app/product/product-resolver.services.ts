import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ProductService } from "./product.service";


@Injectable()
export class ProductListResolveServicer implements Resolve<any>{
  constructor(private prodcutService: ProductService){}

  resolve() {

    let pr =  this.prodcutService.GetProduits().map(res => res)

     console.log(pr)

     return pr;
}

}
