import {NewsapiservicesService} from '../service/newsapiservices.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitcoin',
  templateUrl: './bitcoin.component.html',
  styleUrls: ['./bitcoin.component.css']
})
export class BitcoinComponent implements OnInit {
  ngOnInit: any;
  bitcoinnewsDisplay: any;
  constructor(private services:NewsapiservicesService){

    

    this.ngOnInit
    {
      this.services.bitcoinnews().subscribe((result)=>{
        console.log(result);
        this.bitcoinnewsDisplay = result.articles;
      })
    }
  }
  


    }