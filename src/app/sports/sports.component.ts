import { Component, OnInit } from '@angular/core';

import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {

  constructor(private service: NewsapiService) { }

  sportsDisplay:any =[];

  ngOnInit(): void {
    this.service.sports().subscribe((result:any)=> {
      console.log(result);
      this.sportsDisplay = result.articles;
      
    })
  }

}
