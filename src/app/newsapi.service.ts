import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor (private http: HttpClient) { }

  
  
  topHeading() {
    return this.http.get<any>(environment.newsApiUrl);
  }

  technology(){
    return this.http.get<any>(environment.techApiUrl);
  }

  sports(){
    return this.http.get<any>(environment.sportsApiUrl);
  }

}