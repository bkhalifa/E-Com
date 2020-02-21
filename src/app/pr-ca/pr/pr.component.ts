import { Component, OnInit, Input } from "@angular/core";
import { prcaService } from "../pr-ca.service";
import { Product } from "../../product/product";

@Component({
selector:'pr',
templateUrl:'./pr.component.html',
styleUrls:['./pr.component.css']
})
export class prComponent implements OnInit{



  @Input() produits :Product[];

constructor(private prcaSvc :prcaService){}

  ngOnInit(): void {
   this.prcaSvc.GetProductategries(14)
   .subscribe(
     res => this.produits = res,
     err => console.log(err.status)
   )
  }


}
