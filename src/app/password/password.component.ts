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

  ngOnInit() {
  }

}
