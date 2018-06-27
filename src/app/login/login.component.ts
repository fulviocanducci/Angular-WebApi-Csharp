import { Component, OnInit, Input } from '@angular/core';
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
  user: User;

  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.store = new Storage();
    this.user = new User('fulviocanducci@hotmail.com', '');
  }

  ngOnInit() {
  }

  verifity() {
    this.http.post('http://localhost:8989/api/login', this.user, this.httpOptions )
      .subscribe((data: any) => {
        this.store.setItem('bearer', data.token);
      },
      err => {
        console.log(err);
      });
    return true;
  }

}
