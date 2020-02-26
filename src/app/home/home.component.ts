import { Component } from "@angular/core";
import { animate, state, trigger, transition, style, keyframes } from '@angular/animations';

@Component({
selector:'home',
templateUrl:'./home.component.html',
animations: [
  trigger('toggleElement',[
     state('open',style({
      height: '*',
     opacity: '1',

     })),
     state('close',style({
      height: '0px',
      opacity: '0',
      overflow: 'hidden',

     })),
     transition('close <=> open', animate('200ms ease-in')
      )
   ]),


   trigger('animationCitation',[
    transition('stateA <=> stateB',[
      animate(600, keyframes([
      style({opacity:.5, offset:0}),
      style({opacity:1,color:'#fcb514', offset:.5}),
      style({opacity:.7, offset:.7}),
      style({opacity:1, offset:1})
    ]))
   ])

  ]),



  ]

})

export class HomeComponent{

  open: boolean = false;
  Elementstate :string ="open";

 index:number=0;

 quotes: quote[] = [
  {
      id: 0,
      text:"En vérité, je ne voyage pas, moi, pour atteindre un endroit précis, mais pour marcher : simple plaisir de voyager. ",
      author: 'Robert Louis Stevenson'
  },
  {
      id: 2,
      text:"Mon pied droit est jaloux de mon pied gauche. Quand l'un avance, l'autre veut le dépasser. Et moi, comme un imbécile, je marche ! ",
      author: "Raymond Devos"
  },
  {
      id: 1,
      text:"Le plus long de tous les voyages commence par un tout petit pas",
      author: "proverbe chinois"
  },
];

quote : quote = this.quotes[0];
animationState : string ="stateB";

  toggle(){
    this.open = !this.open;
    console.log(this.open)
    if(this.open){
      this.Elementstate ='open'
    }else{
      this.Elementstate ='close'
    }
  }

  getNext(){
  console.log(this.animationState);
   this.animationState = this.animationState ==="stateA" ? 'stateB':'stateA';
   this.getSomeQuote(-1);
  }
  getPrev(){
    this.animationState = this.animationState ==="stateA" ? 'stateB':'stateA';
    this.getSomeQuote(1);
  }
  getSomeQuote(increment:number){
    this.index = this.index +increment;
    if(this.index >= this.quotes.length && increment ==1){
      this.index =0
    }
    if(this.index <0 && increment===-1){
      this.index = this.quotes.length-1
    }

    this.quote= this.quote[this.index];
  }
}

interface quote{
  id:number,
  text:string,
  author:string
}
