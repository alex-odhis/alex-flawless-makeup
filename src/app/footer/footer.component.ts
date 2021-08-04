import { Component } from '@angular/core';

@Component({
    selector:'footer',

    template:`
        <div class="footer">
          <div class="text-center">
              <div class="py-3 p-5 text-center">
                  <h6 class="text-body">CONTACT US</h6>
                  <p>Email Address: lxodhiambo@gmail.com</p>
                  <p>tel: 0712192510</p>
                  <div class="icons">
                    <i class="fa fa-facebook mx-2"></i>
                    <i class="fa fa-twitter-square mx-2"></i>
                    <i class="fa fa-instagram mx-2"></i>
                  </div>
                  <div class="text-center py-2">
                    <p>Copyright 2020</p>
                    <span class="bg-danger rounded-circle p-2">VA</span>
                  </div>
              </div>
          </div>  
              

          </div>
          `,

    styleUrls:['./footer.component.css']
})

export class FooterComponent{

}