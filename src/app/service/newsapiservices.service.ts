import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(public http:HttpClient) { }

  //newsapiurl
   newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=43d504e1afea4b20be2f4b9c381fca4a";
  //technews
  techApiurl = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=43d504e1afea4b20be2f4b9c381fca4a";
  //bitcoin
  bitcoinApiurl= "https://newsapi.org/v2/everything?q=bitcoin&apiKey=43d504e1afea4b20be2f4b9c381fca4a";

  news():Observable<any>{
    return this.http.get(this.newsApiUrl);
  }
  technews():Observable<any>{
    return this.http.get(this.techApiurl);
  }
  bitcoinnews():Observable<any>{
    return this.http.get(this.bitcoinApiurl);
  }
}
