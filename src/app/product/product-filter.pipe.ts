import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "./product";

@Pipe({
    name:'productFilter'
})
export class productFilterPipe implements PipeTransform{
    transform(value:Product[], searchTerm:string = '') {
      if(searchTerm !== ''){
     let result = value.filter((product:Product)=>product.description.toLowerCase().includes(searchTerm) ||
      product.modelName.toLowerCase().includes(searchTerm)) ;

      return result;
     
      }
      else{
          return value;
      }
    }

}