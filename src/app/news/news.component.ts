import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  ngOnInit: any;
  newsDisplay: any;
  constructor(private services:NewsapiservicesService){

    

    this.ngOnInit
    {
      this.services.news().subscribe((result)=>{
        console.log(result);
        this.newsDisplay = result.articles;
      })
    }
  }
  


    }

