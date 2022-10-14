import { Component, OnInit } from '@angular/core';
import { myItems } from '../myItems/myItems';
import { ImyItems } from '../myItems/ImyItems';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 myItems:Array<ImyItems> = myItems
  constructor() { }

  ngOnInit(): void {
  }

}
