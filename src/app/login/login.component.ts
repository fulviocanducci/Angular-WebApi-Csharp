import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';
import { Storage } from '../storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  httpOptions: any;
  store: Storage;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.store = new Storage();
  }

  ngOnInit() {
  }

  verifity() {
    this.http.post('http://localhost:8989/api/login',
          new User('fulviocanducci@hotmail.com', 'Ab@123456'), this.httpOptions )
      .subscribe(data => {
        this.store.setItem('bearer', data.token);
      },
      err => {
        console.log(err);
      });
    return true;
  }

}
