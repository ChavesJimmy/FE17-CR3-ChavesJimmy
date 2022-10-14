import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { myItems } from '../myItems/myItems';
import { ImyItems } from '../myItems/ImyItems';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  item : ImyItems = {} as ImyItems;
  Index = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) =>{
      this.Index = +params[`itemIndex`];
      this.item = myItems[this.Index]
    })
  }

}
