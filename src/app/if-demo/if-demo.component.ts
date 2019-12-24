import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-demo',
  templateUrl: './if-demo.component.html',
  styleUrls: ['./if-demo.component.css']
})
export class IfDemoComponent implements OnInit {

  num: number;

  constructor() { }

  ngOnInit() {
  }

  generate() {
    this.num = Math.floor(Math.random() * 11);
  }

}
