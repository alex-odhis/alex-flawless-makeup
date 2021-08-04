import { Component } from '@angular/core';

@Component({

    //we dont need a selector coz we are routing to it directly

    template:`<div id="home" class="background">
                  <div class="bg img-fluid" [ngStyle]="{'background-image': 'url(../assets/images/beauty.jpg)' }">
                  <i class="fa fa-angle-down fa-4x " (click)= "toPackages()"></i>
                  </div>
                  <div class="text-center intro"><h1>flawless look </h1> 
                  <h3>no matter the occasion, we got you</h3>
                  <p>ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in tristique risus.</p>
                  <a class="btn btn-light " href="mailto:lxodhiambo@gmail.com">Book Session</a>
                  </div>
                </div>
                <packages id ="packages"></packages>
                <customers id = "clients"></customers>
                ` ,

    styleUrls: ['./banner.component.css']
})

export class BannerComponent {

  toPackages() {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })
  }


}
