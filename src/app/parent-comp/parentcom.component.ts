import { Component, OnInit } from "@angular/core";
import { parentComService } from "./parent-com.services";
import { Product } from "../product/product";

@Component({
  selector :'app-parent',
  templateUrl:'./parentcom.component.html',
  styleUrls:['./parentcom.component.css']
})
export class ParentComComponent implements OnInit{

  constructor(private _parentCom: parentComService){}
  categoryID :number;
UpdatePorduits:Product[];


  ngOnInit(): void {

  }


toggleSideBar(){
console.log(this.categoryID);
}

OnNotify(produits :any[]){
this.UpdatePorduits =produits;
console.log(this.UpdatePorduits);
}

}
