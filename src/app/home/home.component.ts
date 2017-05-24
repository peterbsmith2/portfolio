import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
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

  oxymoron: string = this.oxymorons[0];

  getRandomNumber(): number {
    return 750 * (1 + Math.random());
  }

}
