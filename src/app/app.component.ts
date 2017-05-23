import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/fromEvent';

export class Arrows {
  arrowup: string;
  arrowright: string;
  arrowdown: string;
  arrowleft: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('animationState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active',   style({
        background: 'linear-gradient(rgba(20,20,20, .5),rgba(20,20,20, .5))',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    Observable.fromEvent(document, 'keydown')
      .filter((e: KeyboardEvent) => e.keyCode <= 40 && e.keyCode >= 37 )
      .map((e: KeyboardEvent)=>{
        this.arrows[e.key.toLowerCase()] = "active";
        return e;
      })
      .delay(150)
      .subscribe((e: KeyboardEvent)=>{
        this.arrows[e.key.toLowerCase()] = "inactive";
      });
  }

  arrows: Arrows = {
    arrowup: "inactive",
    arrowright: "inactive",
    arrowdown: "inactive",
    arrowleft: "inactive"
  }

}
