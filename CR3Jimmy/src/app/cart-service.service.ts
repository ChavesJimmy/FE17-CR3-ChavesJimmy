import { Injectable } from '@angular/core';
import { ImyItems } from './myItems/ImyItems';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items : Array<ImyItems> = []

  constructor() { }
  
  addToCart(product: ImyItems){
  this.items.push(product);
};
  getItems(){
  return this.items
};
gettotal(){
  let total : number = 0;
  for(let item of this.items){
    total+= item.price
  } return total
};
clearCart() {
  this.items = [];
  return this.items;
}
getDiscount(){
  let discount = 0;
  let total = 0;

  if(total > 30){
   discount=(total*0.15)
  }
  return discount
}
}

