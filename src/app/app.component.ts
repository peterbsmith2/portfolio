import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { arrowAnimation } from './app.animations';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
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
  animations: [arrowAnimation()]
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  isPasswordRoute() {
    return this.router.url === '/password';
  }

  nextPage() {
    let nextRoute;
    this.isPasswordRoute() ? nextRoute = '/home' : nextRoute = '/password';
    this.router.navigate([nextRoute]);
  }

  ngOnInit() {

    let keydown$ = Observable.fromEvent(document, 'keydown');

    keydown$
    .filter((e: KeyboardEvent) => e.keyCode === 37 && e.shiftKey)
    .subscribe(() => this.nextPage());

    keydown$.filter((e: KeyboardEvent) => e.shiftKey && (e.keyCode <= 40 && e.keyCode >= 37))
    .do((e: KeyboardEvent) => {
      this.arrows[e.key.toLowerCase()] = "active";
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
