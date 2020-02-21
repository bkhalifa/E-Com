import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PsideBarComponent } from "./sidebar/p-sidebar.component";
import { PmenuComponent } from "./menu/p-menu.component";
import { ParentComComponent } from "./parentcom.component";
import { parentComService } from "./parent-com.services";



@NgModule({
imports:[CommonModule],
declarations:[ParentComComponent, PmenuComponent, PsideBarComponent],
exports:[ParentComComponent, PmenuComponent, PsideBarComponent],
providers:[parentComService]
})
export class ParentComModule{}
