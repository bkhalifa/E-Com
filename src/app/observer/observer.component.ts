import { Component, ElementRef, Renderer, HostListener } from "@angular/core";
import { Observable } from "rxjs/Observable";


import { interval } from "rxjs/observable/interval";

import { from } from "rxjs/observable/from";
import { of } from "rxjs/observable/of";
import { fromEvent } from "rxjs/observable/fromEvent";
import { merge } from "rxjs/observable/merge";
import { mapTo } from "rxjs/operator/mapTo";

@Component({
  selector:'observer',
  templateUrl:'./observer.component.html'
})
export class ObserverComponent{

constructor(private el: ElementRef, private renderer: Renderer){}

  SeeObservable() {
    let numbers$ = from([1, 2, 3]);

    numbers$.subscribe(
      val => console.log(`valeur :${val}`),
      err => console.error(`valeur :${err}`),
      () => console.log('complete !')
    );

  }



  SecondsCounter(){
    const secondsCounter = interval(1000);
    console.log(secondsCounter);

    secondsCounter.subscribe(n=>
      console.log(`ça fait ${n} seconds depuis le subscribe`)
      )
  }

  AppleExemple =()=>{
    const observerApple = {
      next :  (apple: string) => console.log(`Apple was emmited ${apple}`),
      error : (err:any) => console.log(`error occured ${err}`),
      complete : () => console.log(`no more appels , go home`)
    };
    let appleStream  = new Observable((appleObserver:any) =>{
      appleObserver.next("apple 1");
      appleObserver.next('apple 2');
      appleObserver.complete();
    });


    let sub1 = appleStream.subscribe(
      apple => console.log(`apple was emmited ${apple}`),
      err => console.log(`error occured :${err}`),
      ()=> console.log('appel completed')
    );

    console.log(sub1);

     let sub = appleStream.subscribe(observerApple);
     sub.unsubscribe();
     console.log(sub);

  }

  FuncExmple =()=>{

    let apples =['apple 1', 'apple 2', 'apple 3'];

  let appleOfStream = of(apples);
  let appleFromStream = from(apples);

    appleOfStream.subscribe(console.log);
    appleFromStream.subscribe(console.log);


  }

  OFFromExmple=()=>{
    of(2, 4, 6)
     .subscribe(
      item => console.log(`subscribe of ${item}`),
      err => console.error(`eeror occured ${err}`),
      () => console.log('complete')
     );

    from([20, 15, 10, 5])
     .subscribe(
      item => console.log(`subscribe from ${item}`),
      err => console.error(`eeror occured ${err}`),
      () => console.log('complete')
    )



  }

  MapObs =() =>{
   let array$ = from([1,2,3]);
   array$.map(x=>x*10).subscribe(console.log);
  }

  IntervalData =()=>{
    let interval$ = interval(1000)

    interval$.subscribe(
      res => console.log("interval ...",res),
      err => console.error(err),
      ()=> console.log('complete')
    )
  }

  FromEvent = () => {
    let doc$ = Observable.fromEvent(document, 'click');
    doc$.subscribe(
      res => console.log("interval ...", res),
      err => console.error(err),
      () => console.log('complete')
    )
  }

  // merge like dislike

@HostListener('click')
OnClick(){

let like = document.getElementById('like');
let dislike = document.getElementById('dislike');
let like$ = fromEvent(like,'click');
let dislike$ = fromEvent(dislike,'click');
let options$ = merge(like$, dislike$);

options$.subscribe(
  res => console.log("options $", res),
  err => console.error(err),
  () => console.log('complete')
)
}

}
