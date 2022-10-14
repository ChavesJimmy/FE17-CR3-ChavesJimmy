import { Injectable } from '@angular/core';
import { ImyItems } from './myItems/ImyItems';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  items : Array<ImyItems> = []

  constructor() { }
  
  addToCart(item: ImyItems){
  this.items.push(item);
};
getItems(){
  return this.items
};

}
