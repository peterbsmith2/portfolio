import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let randomNumber = this.getRandomNumber();
    Observable.interval(randomNumber)
      .subscribe((i) => {
        randomNumber = this.getRandomNumber();
        this.oxymoron = this.oxymorons[i % this.oxymorons.length]
      });
  }

  oxymorons: Array<string> = [
    'Dimly Shrewd',
    'Unknowingly Self-Aware',
    'Moral Scoundrel',
    'Outgoing Introversion',
    'Rough Gentleman',
    'Ignorant Intellect',
    'Largely Minimal',
    'Scatter Precision',
    'Closeted Extraversion'
  ]

  oxymoron: string = ''

  getRandomNumber(): number {
    return 750 * (1 + Math.random());
  }

}
