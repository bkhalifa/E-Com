import { Component, Input, OnInit } from "@angular/core";
import { Product } from "../../product/product";
import { parentComService } from "../parent-com.services";

@Component({
  selector:'p-menu',
  templateUrl:'./p-menu.component.html',
  styleUrls:['./p-menu.component.css']
})
export class PmenuComponent implements OnInit{


  @Input() produits :Product[];

  constructor(private _parSvc: parentComService){}

  ngOnInit(): void {
    this._parSvc.GetProductategries(14).subscribe(
    res => this.produits = res,
    err => console.log(err.status)
    )
  }

}
