import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

interface mydata{
  obj: Array<Object>
}
@Injectable({
  providedIn: 'root'
})

export class NewsapiservicesService {

  constructor(private http:HttpClient) { }

  //newsapiurl
   newsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=43d504e1afea4b20be2f4b9c381fca4a";
  //technews
  techApiurl = "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=43d504e1afea4b20be2f4b9c381fca4a";
  //bitcoin
  bitcoinApiurl= "https://newsapi.org/v2/everything?q=bitcoin&apiKey=43d504e1afea4b20be2f4b9c381fca4a";

  news():Observable<any>{
    return this.http.get<mydata>(this.newsApiUrl);
  }
  technews():Observable<any>{
    return this.http.get<mydata>(this.techApiurl);
  }
  bitcoinnews():Observable<any>{
    return this.http.get<mydata>(this.bitcoinApiurl);
  }
}
