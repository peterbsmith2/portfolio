import { Component, OnInit } from '@angular/core';
import { stretch } from './secret-form.animations';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-secret-form',
  templateUrl: './secret-form.component.html',
  styleUrls: ['./secret-form.component.css'],
  animations: [stretch()]
})
export class SecretFormComponent implements OnInit {

  constructor(private http: Http) { }

  stretched: String = 'false';

  stretch(phoneNumber) {
    this.stretched === 'false' ? this.stretched = 'true' : this.stretched = 'false';
    this.http.post('https://az10lxlraj.execute-api.us-east-2.amazonaws.com/dev/send', {
      to: phoneNumber
    }).subscribe();
  }

  ngOnInit() {
  }

}
