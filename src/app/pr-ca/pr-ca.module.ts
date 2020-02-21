import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { prComponent } from "./pr/pr.component";
import { caComponent } from "./ca/ca.component";
import { prcaComponent } from "./pr-ca.component";
import { prcaService } from "./pr-ca.service";

@NgModule({
  imports:[CommonModule],
  declarations:[prComponent,caComponent,prcaComponent],
  exports:[prComponent,caComponent,prcaComponent],
  providers:[prcaService]

})
export class PrcaModule{}
