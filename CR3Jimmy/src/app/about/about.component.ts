import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  BookTable = new FormGroup ({
    name : new FormControl ('', Validators.required),
    number : new FormControl ('', Validators.required),
    date : new FormControl ('', Validators.required),
    hour : new FormControl ('', Validators.required),
  })
  constructor() { }

  bookTable(){
    if(this.BookTable.valid){
      alert("Your table is booked, we are looking forward to meet you")
    }
    }

  ngOnInit(): void {
  }

}
