import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @Output()
  sendName = new EventEmitter<string>();

  name: string = "Yellow Submarine";

  constructor() { }

  ngOnInit(): void {
  }

  showAlert()
  {
    this.sendName.emit(this.name);
  }
}
