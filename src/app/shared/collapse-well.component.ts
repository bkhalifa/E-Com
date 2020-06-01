 import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'collapsibles',
  templateUrl: './collapse-well.component.html'
})

export class CollaseWellComponent implements OnInit {
  constructor() { }

  @Input() title :string;

  visible: boolean = true;
  ngOnInit() { }

  toggleContent(){
    this.visible = !this.visible;
  }
}
