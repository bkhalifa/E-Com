import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "./product";

@Component({
moduleId:module.id,
selector:'product-summary',
templateUrl:'./product-summary.component.html',
styleUrls:['./product-summary.component.css']
})
export class ProductSummaryComponent{
  @Input() produit:Product;
  @Output() addEvproduitPanier = new EventEmitter<Product>();

  addToPanier(isAdded:any, produitId:number){
    console.log(isAdded);
    console.log(produitId);
    if(isAdded){
     this.addEvproduitPanier.emit(this.produit);
    }
  }
}
