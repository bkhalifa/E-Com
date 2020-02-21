import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuComponent } from "./menu/menu.component";
import { SideBarComponent } from "./side/side-bar.component";
import { ComComponent } from "./com.component";

@NgModule({
  imports:[CommonModule],
  declarations:[ComComponent,MenuComponent, SideBarComponent],
  exports:[MenuComponent, SideBarComponent],
  providers:[]
})
export class ComModule{}
