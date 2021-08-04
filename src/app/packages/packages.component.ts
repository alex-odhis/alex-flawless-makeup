import { Component, OnInit } from "@angular/core";

import { NgwWowService } from 'ngx-wow';
import { animate } from '@angular/animations';
import { PackagesService } from "./packages.service";


@Component({
    selector: 'packages',

    templateUrl: './packages.component.html',

    styleUrls: ['./packages.component.css']

    // animations:[ fade ]
})

export class PackagesComponent implements OnInit{
    errorMessage = ''
    packages: any[] 

    constructor(private wowService: NgwWowService,
                private packagesService: PackagesService) {} 

    ngOnInit(){
        this.wowService.init();
        this.getPackages()
    }

    getPackages(){
        this.packagesService.getPackages().subscribe({
            next: data => this.packages = data,
        })
    }

    reset(){
        this.wowService.init();
    }

}

