import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let randomNumber = this.getRandomNumber();
    Observable.interval(randomNumber)
      .subscribe((i) => {
        randomNumber = this.getRandomNumber();
        this.oxymoron = this.oxymorons[i % this.oxymorons.length]
      });

    Observable.fromEvent(document, 'keydown')
      .filter((e: KeyboardEvent) =>  e.keyCode <= 40 && e.keyCode >= 37 )
      .map((e: KeyboardEvent)=>{
        this.arrows[e.key.toLowerCase()] = true;
        return e;
      })
      .delay(150)
      .subscribe((e: KeyboardEvent)=>{
        this.arrows[e.key.toLowerCase()] = false;
      });
  }

  arrows = {
    arrowup: false,
    arrowright: false,
    arrowdown: false,
    arrowleft: false
  }


  oxymorons = [
    'Moral Scoundrel',
    'Outgoing Introversion',
    'Rough Gentleman',
    'Ignorant Intellect',
    'Largely Minimal',
    'Scatter Precision',
    'Secluded Extraversion'
  ]

  oxymoron = ''

  getRandomNumber() {
    return 750 * (1 + Math.random());
  }

}