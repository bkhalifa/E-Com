import { Component, Input, HostListener } from "@angular/core";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector:'side-bar',
  templateUrl:'./side-bar.component.html',
  styleUrls:['./side-bar.component.css']
})
export class SideBarComponent{


  @Input() menu : MenuComponent;

  @HostListener('click')
  click(){
    let v =  this.menu.toggle();
    console.log(v)

  }
}
