import { Component,HostBinding, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { ReturnStatement } from '@angular/compiler';

@Component({
    selector: 'nav-bar',

    templateUrl: './nav.component.html',
    
    styleUrls: ['./nav.component.css']

    // animations:['']
})
export class NavComponent {

    header_variable = false;

    @HostListener("document:scroll")
    
    scrollfunction(){
                    //return condition ? A: B;(same as if statement)
        return (document.documentElement.scrollTop > 0) ? this.header_variable = true : this.header_variable = false;
    }

    toPackages() {
        document.getElementById('packages').scrollIntoView({ behavior: 'smooth' })
    }

    toClients() {
        document.getElementById('clients').scrollIntoView({ behavior: 'smooth' })
    }

    toLessons() {
        document.getElementById('lessons').scrollIntoView({ behavior: 'smooth' })
    }
    toContact() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    }
}
