import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: '<h1>{{title}}</h1>'
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    constructor() { }

    ngOnInit() { 

    }

}