import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

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
  }

  oxymorons = [
    'Rough Gentleman',
    'Moral Scoundrel',
    'Outgoing Introversion',
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