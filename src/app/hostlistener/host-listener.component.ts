import { Component, HostListener, ElementRef, Renderer } from "@angular/core";

@Component({
  selector:'app-host-listner',
  template:`
  <div class='card-text'>
  <h1>Hello, you have pressed keys {{counter}} number of times!</h1> Press any key to
increment the counter.
  <!-- <button (click)="resetCounter()">Reset Counter</button> -->
</div>
  `
})
export class HostListenerComponent{
  counter :number = 0;
constructor(private el: ElementRef, private renderer: Renderer){}


@HostListener('click') onClick() {
  let part = this.el.nativeElement.querySelector('.card-text');
  this.counter ++;
  this.renderer.setText(part,this.counter.toString())
}
  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'color', 'green');
  }
}
