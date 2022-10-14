import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { myItems } from '../myItems/myItems';
import { ImyItems } from '../myItems/ImyItems';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item : ImyItems = {} as ImyItems;
  Index = 0;

  constructor(
    private route: ActivatedRoute, 
    private cartService : CartServiceService) { }

  addToCart(){
    this.cartService.addToCart(this.item);
    console.log(this.item)
    alert(`added to Cart`)
  }
  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.Index = +params[`itemIndex`];
      this.item = myItems[this.Index]
    })
  }

}
