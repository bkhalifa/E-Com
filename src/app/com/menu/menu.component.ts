import { CommonModule } from "@angular/common";
import { Component, HostBinding } from "@angular/core";

@Component({
selector:'menu',
templateUrl:'./menu.component.html',
styleUrls:['./menu.component.css']
})
export class MenuComponent{


  @HostBinding('class.is-open')
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
