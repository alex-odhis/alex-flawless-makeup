import { Routes } from "@angular/router";
import { BannerComponent } from './banner/banner.component';


export const appRoutes: Routes=[
    { path:'home',  component: BannerComponent },
    { path:'', redirectTo: '/home', pathMatch:'full' }
    
]