import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  constructor(private http: HttpClient) {}

  getData() {
    let url = 'https://jsonplaceholder.typicode.com/todos';
    return this.http.get(url);
  }

  postData(data: any) {
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.post(
      url,
      JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
    );
  }
}
