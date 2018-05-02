import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {

  @Input() abouttxt: string;

  aString: string

  constructor() {}
   
  ngOnInit() {
  }
  onDestroy() {

  }
}
