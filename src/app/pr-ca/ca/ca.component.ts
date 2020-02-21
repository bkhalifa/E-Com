import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CategoryModule } from "../../category/category.module";
import { prcaService } from "../pr-ca.service";
import { Product } from "../../product/product";

@Component({
  selector:'ca',
  templateUrl:'./ca.component.html',
  styleUrls:['./ca.component.css']
})
export class caComponent implements OnInit{


 @Output() NotifyProduits :EventEmitter<Product[]> = new EventEmitter<Product[]>();

  produits :Product[];
  categories:any[];


  constructor(private prcaSvc: prcaService){}
  ngOnInit(): void {
    this.prcaSvc.GetCategries()
    .subscribe(
     res =>  this.categories = res,
     err => console.log(err.status)
    )
  }

  GetProduits(categoryId:number){
this.prcaSvc.GetProductategries(categoryId)
.subscribe(
  res => this.NotifyProduits.emit(res),
  err => console.log(err.status)
)
  }


}
