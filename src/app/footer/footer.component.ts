import { Component } from '@angular/core';

@Component({
    selector:'footer',

    template:`
        <div class="footer">
          <div class="text-center">
              <div class="py-3 p-5 text-center">
                  <h4 class="text-warning">Contact Us</h4>
                  <p>Email Address: lxodhiambo@gmail.com</p>
                  <p>tel: 0712192510</p>
                  <div class="icons">
                    <a class="fa fa-facebook mx-2 px-2 text-primary bg-white rounded-circle" ></a>
                    <a class="fa fa-twitter mx-2 bg-info  rounded-circle"></a>
                    <a class="fa fa-instagram mx-2 text-danger bg-white rounded-circle" ></a>
                    <a class="fa fa-whatsapp mx-2 text-success bg-white rounded-circle" ></a>
                  </div>
                  <div class="text-center py-2">
                    <p>Copyright 2021</p>
                    <span class="bg-white text-danger rounded-circle p-2">FM</span>
                  </div>
              </div>
          </div>  
              

          </div>
          `,

    styleUrls:['./footer.component.css']
})

export class FooterComponent{

}