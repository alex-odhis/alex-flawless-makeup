import { Component, OnInit } from '@angular/core';
import { CustomersService } from './customers.service';

@Component({
    selector:'customers',

    templateUrl:'./customers.component.html',

    styleUrls: ['./customers.component.css']
})

export class CustomerComponent implements OnInit{
    customers:any[]
    errorMessage: any;

    constructor(private customersService: CustomersService){}
    ngOnInit(): void {
        this.getCustomers()
    }

    getCustomers(){
        this.customersService.getCustomers().subscribe({
            next: data => this.customers = data,
            error: err => this.errorMessage = err
        })
    }

}