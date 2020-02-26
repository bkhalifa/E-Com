import { Component, OnInit } from "@angular/core";
import { NgForm} from "@angular/forms";
import { ProductService } from "../product/product.service";
import { Product } from "../product/product";

@Component ({
  selector:'add-product',
  templateUrl:'./add-product.component.html',
  styleUrls:['./add-product.component.css']
})
export class AddProductComponent implements OnInit{



constructor(private productSvc:ProductService)   {}

categoryId:number;
pr:any;
selectedFile: File
selectedFiles: Array<File> = [];
values : any;

ngOnInit(): void {

}

  PostProduit(form:NgForm){

    let pr = new Product();
      pr.categoryId = this.categoryId;
      pr.description = form.value.description;
      pr.modelName =form.value.modelName;
      pr.modelNumber = form.value.modelNumber;
      pr.unitCost = form.value.uniCost;

   let formData: FormData = new FormData();


   for(let i =0; i <  this.selectedFiles.length; i++){
       formData.append("files", this.selectedFiles[i]);
     }

   formData.append('model', JSON.stringify(pr));

   this.productSvc.PostProduct(formData);

    form.resetForm();

  }

  OnChange(categoryId: number){
    this.categoryId = categoryId;

  }




    onFileChanged(event:any) {
     if(event.target.files.length > 0){
      this.selectedFiles = <Array<File>>event.target.files;;

     }
    }

}
