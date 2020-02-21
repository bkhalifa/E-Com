import { Component } from "@angular/core";
import { Product } from "../product/product";

@Component({
  selector:'pr-ca',
  templateUrl:'./pr-ca.component.html',
  styleUrls:['./pr-ca.component.css']
})
export class prcaComponent{



   updatedPorducts :Product[];

  OnNotifyProduit(produit:Product[]){
     this.updatedPorducts = produit;

  }
}
