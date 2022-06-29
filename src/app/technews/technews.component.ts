import { Component, OnInit } from '@angular/core';

import {NewsapiService} from '../newsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit {

  constructor(private service: NewsapiService) { }

  technologyDisplay:any =[];

  ngOnInit(): void {

    this.service.technology().subscribe((result:any)=> {
      console.log(result);
      this.technologyDisplay = result.articles;
      
    })
  }

}
