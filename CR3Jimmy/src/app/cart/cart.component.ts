import { Component, OnInit } from '@angular/core';
import { ImyItems } from '../myItems/ImyItems';
import { CartServiceService } from '../cart-service.service';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:Array<ImyItems> = [];
  total : number = 0;
  action : number = 0;
  validOrder = this.form.group({
    name: "",
    address: "",
    phone: ""
  })

  constructor( 
    private cartService : CartServiceService,
    private form : FormBuilder) { }
  
    onSubmit() {
      alert('Your order was registered `` You will receive a sms when your order is ready');
      this.items = this.cartService.clearCart();
      this.total = 0
      this.validOrder.reset();
    }

  ngOnInit(): void {
    this.items =this.cartService.getItems()
    this.total = this.cartService.gettotal()
    this.action = this.cartService.getDiscount()

  } 
}
