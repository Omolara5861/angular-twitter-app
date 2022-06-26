import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = 'https://twitter-dtab.herokuapp.com/tweetList';

  constructor(private http : HttpClient) { }

  postAddpost(data : any) {
    return this.http.post<any>(this.baseUrl, data);
  }

  getAddpost() {
    return this.http.get<any>(this.baseUrl)
  }
}
