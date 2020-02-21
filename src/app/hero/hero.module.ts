import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroChildComponent } from "./hero-child.component";
import { HeroParentCompoent } from "./hero-parent.component";


@NgModule({
  imports:[CommonModule],
  declarations:[HeroChildComponent, HeroParentCompoent],
  exports:[HeroParentCompoent , HeroChildComponent],
  providers:[]
})
export class HeroModule{}
