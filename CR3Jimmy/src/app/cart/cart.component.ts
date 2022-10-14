import { Component, OnInit } from '@angular/core';
import { ImyItems } from '../myItems/ImyItems';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:Array<ImyItems> = []

  constructor( private cartService : CartServiceService) { }
  getItems(){
    this.items =this.cartService.getItems()

  }

  ngOnInit(): void {
  }

}
