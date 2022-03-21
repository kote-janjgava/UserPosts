import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyServiceService {
  constructor(private http: HttpClient) {}

  // Getting all users from API
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  // Getting users from API by Id
  getUser(userId: string) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );
  }
  // Getting all posts from API
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
