import { Component, ViewChild } from '@angular/core';
import {ChildComponent} from "./child/child.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  @ViewChild(ChildComponent)
  private childComponent:ChildComponent;
  increase(){
    this.childComponent.increaseCount();
  }
  decrease(){
    this.childComponent.decreaseCount();
  }

}

