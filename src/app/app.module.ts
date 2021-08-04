import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgwWowModule } from 'ngx-wow';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BannerComponent } from './banner/banner.component';
import { PackagesComponent } from './packages/packages.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { CustomerComponent } from './customers/customers.component';
import { FooterComponent } from './footer/footer.component';
import { PackagesService } from './packages/packages.service';
import { CustomersService } from './customers/customers.service';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    PackagesComponent,
    CustomerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgwWowModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PackagesService,
    CustomersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
