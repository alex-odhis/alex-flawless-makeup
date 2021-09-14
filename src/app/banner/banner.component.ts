import { Component } from '@angular/core';


@Component({

    //we dont need a selector coz we are routing to it directly

    template:`<div id="home" class="background">
                  <div class="bg img-fluid" [ngStyle]="{'background-image': 'url(./assets/images/beauty.jpg)' }">
                  </div>
                  <div parallax class=" intro"><h1>Flawless Look </h1>
                    <h3>No matter the occasion, we got You..</h3>
                     <p>ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in tristique risus. 0712192510</p>
                     <a class="btn btn-light " href="mailto:lxodhiambo@gmail.com">Book Session</a>
                  </div>
                  <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,320L80,277.3C160,235,320,149,480,144C640,139,800,213,960,213.3C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                  <i class="fa fa-angle-double-down fa-2x" (click)= "toPackages()"></i>
              </div>
                <packages id ="packages"></packages>
                <customers id ="clients"></customers>
                <testimonials></testimonials>
                ` ,

    styleUrls: ['./banner.component.css']
})

export class BannerComponent {

}
