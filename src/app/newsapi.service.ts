import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor (private http: HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=05b10b5d6e73426490d6151df9b99bbd";
  
  topHeading() {
    return this.http.get<any>(this.newsApiUrl);
  }

}