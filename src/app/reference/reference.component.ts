import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '../storage';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {

  references: any;
  httpOptions: any;
  store: Storage;

  constructor(private http: HttpClient) {
    this.store = new Storage();
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'bearer ' + (this.store.getItem('bearer'))
      })
    };
  }

  ngOnInit() {
    this.loadReferences();
  }

  loadReferences() {
    this.http.get('http://localhost:8989/api/references', this.httpOptions)
    .subscribe(data => {
      this.references = data;
    });
  }
}
