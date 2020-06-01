import { Component, OnInit } from "@angular/core";
import { ProductService } from "./product.service";
import { Product } from "./product";
import { ActivatedRoute } from "@angular/router";


@Component({
    moduleId:module.id,
    selector:'product-list',
    templateUrl:'./product-list.component.html'
})

export class ProductListComponent implements OnInit{

    constructor(private route : ActivatedRoute){}

    produits :Product[];

    ngOnInit(): void {
       this.produits = this.route.snapshot.data["produits"]

      // this._productService.GetProduits()
      // // .subscribe({
      // //   next(res){console.log(res);},
      // //   error(err){console.log(err)},
      // //   complete(){console.log('completed !')}
      // // })
      // .subscribe(
      //     res => this.produits = res,
      //     err => console.log(err.status)
      // );
      // console.log(this.produits);
    }

    addToDoProduit(produitToAdd:Product){
      console.log(`produit ${produitToAdd.description} a été ajouté`);
    }

}
