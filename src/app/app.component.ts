import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
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
    .subscribe((e: KeyboardEvent)=> console.log(e.keyCode));
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