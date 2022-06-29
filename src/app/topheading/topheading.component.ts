
import { Component, OnInit } from '@angular/core';

import {NewsapiService} from '../newsapi.service'


@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.scss']
})
export class TopheadingComponent implements OnInit {

  constructor(private services: NewsapiService) { }


      topheadingDisplay:any = [];


  ngOnInit(): void {

    this.services.topHeading().subscribe((result: any)=> {
      console.log(result);
      this.topheadingDisplay = result.articles;
    })
  }

}
