import { Component, OnInit } from '@angular/core';

@Component({
   // moduleId: module.id,
    selector: 'my-app',
    //templateUrl: 'fileName.component.html'
    template:`
        <h1>{{title}}</h1>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name">
        </div>
  `

})
export class AppComponent  {
    title= 'Tour of Heroes';
    hero:Hero={
        id:1,
        name:'windstorm'
    };
   

}

export class Hero {
    id:number;
    name:string;
}
