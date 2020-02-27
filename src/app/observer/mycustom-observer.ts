
export class MyCustomObserver{

  next = (val:any) => console.log(`valeur :${val}`);



  error = (err:any) =>  console.log(`error :${err}`);


  complete = ()  => console.log('complete !');

}
