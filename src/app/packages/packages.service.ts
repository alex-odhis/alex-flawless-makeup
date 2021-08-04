import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class PackagesService {
    constructor() {}

    packages : any[] = [
        { 
            id:1,
        name: 'Photoshoot Makeup', 
        img: './assets/images/package.jpeg', 
        icon: 'fa fa-camera', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in tristique risus. Pellentesque nec sodales Phasellus ac dictum est.' 
       },

        { 
            id:2,
        name: 'Music Video Makeup', 
        img: './assets/images/package1.jpg', 
        icon: 'fa fa-music', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in tristique risus. Pellentesque nec sodales Phasellus ac dictum est.' 
        },

        { 
            id:3,
        name: 'Bridal Makeup', 
        img: './assets/images/package2.jpg', 
        icon: 'fa fa-star', 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in tristique risus. Pellentesque nec sodales Phasellus ac dictum est.' 
       }
    ]

    getPackages(){
        return of(this.packages)
    }

}