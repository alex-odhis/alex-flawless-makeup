import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class TestimonyService {
    constructor() {}

    testimonies=[
        {
            name: 'Alex',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus in tristique risus. Pellentesque nec sodalesligula Phasellus ac dictum est.Praesent vel turpis vel magna maximus posuere sed in ligula.',
            pic:'./assets/images/toto.jpg'
        },
        {
            name: 'Mary',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus in tristique risus. Pellentesque nec sodalesligula Phasellus ac dictum est.Praesent vel turpis vel magna maximus posuere sed in ligula.',
            pic: './assets/images/toto2.jpeg'
        },
        {
            name: 'Angela',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus in tristique risus. Pellentesque nec sodalesligula Phasellus ac dictum est.Praesent vel turpis vel magna maximus posuere sed in ligula.',
            pic: './assets/images/toto3.jpg'
        },
        {
            name: 'Bella',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus in tristique risus. Pellentesque nec sodalesligula Phasellus ac dictum est.Praesent vel turpis vel magna maximus posuere sed in ligula.',
            pic: './assets/images/toto10.jpg'
        },
        {
            name: 'Shikki',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus in tristique risus. Pellentesque nec sodalesligula Phasellus ac dictum est.Praesent vel turpis vel magna maximus posuere sed in ligula.',
            pic: './assets/images/toto9.jpg'
        }
    ]

    getTestimony(){
        return of(this.testimonies)
    }
}