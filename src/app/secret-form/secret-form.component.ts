import { Component, OnInit } from '@angular/core';
import { stretch } from './secret-form.animations';

@Component({
  selector: 'app-secret-form',
  templateUrl: './secret-form.component.html',
  styleUrls: ['./secret-form.component.css'],
  animations: [stretch()]
})
export class SecretFormComponent implements OnInit {

  constructor() { }

  stretched: String = 'false';

  stretch() {
    this.stretched === 'false' ? this.stretched = 'true' : this.stretched = 'false';
  }

  ngOnInit() {
  }

}
