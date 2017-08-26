import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  content: string;
  clickable = false;

  constructor() { }

  ngOnInit() {
  }

  isInputEmpty() {

    if (this.content === '') {
      return this.clickable = false;
    }
    return this.clickable = true;
  }

}
