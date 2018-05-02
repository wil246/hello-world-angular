import { Component, OnInit, Input } from '@angular/core';
import {MaxService } from './max.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Will';
@Input() aboutText: string = "Will's Site about";

constructor(private max: MaxService){
  console.log("max.about", this.max.about)
}
}