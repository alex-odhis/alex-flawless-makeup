import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  template: `   <nav-bar></nav-bar>
                <router-outlet></router-outlet>
                <footer></footer>
             `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio';

  constructor( private wowService: NgwWowService){}
  
  ngOnInit(){
    this.wowService.init();
  }

}
