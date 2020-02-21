import { Component } from "@angular/core";
import { Hero } from "./hero";

@Component({
selector:'hero-parent',
templateUrl:'./hero-parent.component.html'
})
export class HeroParentCompoent{
DisplayName :string;

  description:string;
  HEROES: Hero[] = [
    { id: 11, name: 'Dr Nice',description:'this is Dr Nice ' },
    { id: 12, name: 'Narco',description:'this is narco' },
    { id: 13, name: 'Bombasto',description:' this bombasto' },
    { id: 14, name: 'Celeritas' ,description:'this celeritas' },
    { id: 15, name: 'Magneta',description:'this is Magneta'  },
    { id: 16, name: 'RubberMan' ,description:'this is RubberMan' },
    { id: 17, name: 'Dynama' ,description:'this is Dynama' },
    { id: 18, name: 'Dr IQ',description:'this is Dr IQ'  },
    { id: 19, name: 'Magma' ,description:'this is Magma' },
    { id: 20, name: 'Tornado',description:'this is Tornado'  }
  ];

  displatHero(hero:any){
    this.DisplayName = hero.name;
  }
}
