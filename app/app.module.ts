import { NgModule } from '@angular/core';

import { BrowserModule }  from '@angular/platform-browser';
import {FormsModule } from '@angular/forms'
import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroesComponent} from './Heroes.component';
import {HeroService} from './hero.service'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    exports: [],
    declarations: [
            AppComponent, 
            HeroDetailComponent,
            HeroesComponent],
    bootstrap:[AppComponent],
    providers: [HeroService],
})
export class AppModule { }
