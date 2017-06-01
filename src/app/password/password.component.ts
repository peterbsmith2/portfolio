import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class PasswordComponent implements OnInit {

  constructor() { }

  visible: Boolean = false;

  show(password: string): void {    
    if (password === "swordfish") {
      this.visible = !this.visible;
    }
  }

  ngOnInit() {
  }

}
