import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "../product/product";

@Pipe({
  name:'produitFilter'
})
export class CategFilterPipe implements PipeTransform{
  transform(value: Product[], searchTerm:'') {
    if(searchTerm !== ''){
      let result = value.filter((product:Product)=>product.description.toLowerCase().includes(searchTerm)
      ||  product.modelName.toLowerCase().includes(searchTerm)) ;

       return result;

       }
       else{
           return value;
       }
  }

}
