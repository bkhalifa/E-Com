import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ProductService } from "../../product/product.service";


@Component({
selector:'list-category',
templateUrl:'./list-category.component.html'
})
export class ListCategoryComponent implements OnInit{

  categories :any[];
@Output() NotifyProduct : EventEmitter<number> = new EventEmitter<number>();
constructor(private produitSvc :ProductService){}


ngOnInit(): void {
 this.produitSvc.GetCategries()
 .subscribe(
   res => this.categories = res,
   err => console.log(err.status)
 )
}


Onchange(option:any){
  this.NotifyProduct.emit(option.value);
}
}
