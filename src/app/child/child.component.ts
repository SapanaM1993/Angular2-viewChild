import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 public count:number = 0;
 public message:string = '';
  constructor() { }

  ngOnInit() {
  }

  increaseCount(){
  this.count = this.count + 1;
  this.message = "counter is " + this.count;
  }
  decreaseCount(){
  this.count = this.count - 1;
  this.message = "counter is " + this.count;
  }
}
