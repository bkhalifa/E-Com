import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { parentComService } from "../parent-com.services";
import { Product } from "../../product/product";


@Component({
  selector: 'p-side-bar',
  templateUrl: './p-sidebar.component.html',
  styleUrls: ['./p-sidebar.component.css']
})
export class PsideBarComponent implements OnInit {

  categories: any[];
  produits :Product[];

  @Input() categoryID: number;
  @Output() Notify :EventEmitter<Product[]> = new EventEmitter<Product[]>();



  constructor(private _comsvc: parentComService) { }

  ngOnInit(): void {
    this._comsvc.GetCategries().subscribe(
      res => this.categories = res,
      err => console.log(err.status)
    )
  }

  Getproducts(categoryId: number) {
    this.categoryID = categoryId;
    this._comsvc.GetProductategries(this.categoryID)
    .subscribe(
          res => this.Notify.emit(res),
          err  => console.log(err.status)
    )


  }



}
