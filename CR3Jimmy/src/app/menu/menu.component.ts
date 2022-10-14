import { Component, OnInit } from '@angular/core';
import { myItems } from '../myItems/myItems';
import { ImyItems } from '../myItems/ImyItems';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 myItems:Array<ImyItems> = myItems;
 item: ImyItems = {} as ImyItems
  constructor(private cartService : CartServiceService) { }
  
  addToCart(){
    alert(`added to cart`)
    this.cartService.addToCart(this.item)

  }
  ngOnInit( ): void {
  }
  

}
