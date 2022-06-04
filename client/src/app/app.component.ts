import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'The Dating app';
  users!: User[];
  selectedUser!: User;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.http.get<User[]>('https://localhost:5001/api/users')
      .subscribe(response => {
        this.users = response;
      });
  }
}

interface User {
  id: number,
  userName: string,
}
