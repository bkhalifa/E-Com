import { Component, HostListener, ElementRef, Renderer } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ProductService } from "../product/product.service";
import { Product } from "../product/product";
import { empty } from "rxjs/Observer";

@Component ({
  selector:'add-product',
  templateUrl:'./add-product.component.html',
  styleUrls:['./add-product.component.css']
})
export class AddProductComponent{


constructor(private productSvc:ProductService) {}

categoryId:number;
pr:any;

  PostProduit(form:NgForm){
    let pr = new Product();
     pr.modelName = form.value.modelNumber;
     pr.modelNumber = form.value.modelNumber;
     pr.unitCost = form.value.uniCost;
     pr.description = form.value.description;
     pr.categoryId = this.categoryId;
     this.productSvc.PostProduct(pr);
      form.resetForm();
  }

  OnChange(categoryId: number){
    this.categoryId = categoryId;

  }

}
