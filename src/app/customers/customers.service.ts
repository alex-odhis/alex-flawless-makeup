import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CustomersService {
    constructor() { }

    customers: any[] = [
        {
            tone: 'Chocolate',
            img: './assets/images/customer4.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus in tristique risus. Pellentesque nec sodalesligula Phasellus ac dictum est.Praesent vel turpis vel magna maximus posuere sed in ligula.'
        },
        {
            tone: 'Caucasian',
            img: './assets/images/customer.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus in tristique risus. Pellentesque nec sodalesligula Phasellus ac dictum est.Praesent vel turpis vel magna maximus posuere sed in ligula.'
        },
        {
            tone: 'Lightskin',
            img: './assets/images/customer7.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus in tristique risus. Pellentesque nec sodalesligula Phasellus ac dictum est.Praesent vel turpis vel magna maximus posuere sed in ligula.'
        },
        {
            tone: 'Lightskin',
            img: './assets/images/customer5.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus in tristique risus. Pellentesque nec sodalesligula Phasellus ac dictum est.Praesent vel turpis vel magna maximus posuere sed in ligula.'
        },
        {
            tone: 'Mulato',
            img: './assets/images/customer3.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus in tristique risus. Pellentesque nec sodalesligula Phasellus ac dictum est.Praesent vel turpis vel magna maximus posuere sed in ligula.'
        },
        {
            tone: 'Darkskin',
            img: './assets/images/customer8.jpeg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus in tristique risus. Pellentesque nec sodalesligula Phasellus ac dictum est.Praesent vel turpis vel magna maximus posuere sed in ligula.'
        },
    ]

    getCustomers() {
        return of(this.customers)
    }

}