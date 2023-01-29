import { Component, OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  ngOnInit: any;
  technewsDisplay: any;
  constructor(private services:NewsapiservicesService){

    

    this.ngOnInit
    {
      this.services.technews().subscribe((result)=>{
        console.log(result);
        this.technewsDisplay = result.articles;
      })
    }
  }
  


    }

