import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(userId: string) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
