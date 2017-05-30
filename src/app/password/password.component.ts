import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { flipAnimation } from './password.animations';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  animations: [routerTransition(), flipAnimation()],
  host: {'[@routerTransition]': ''}
})
export class PasswordComponent implements OnInit {

  constructor() { }

  flipped: Boolean = false;

  flip(password: string): void {    
    if (password === "swordfish") {
      this.flipped = !this.flipped;
    }
  }

  ngOnInit() {
  }

}
