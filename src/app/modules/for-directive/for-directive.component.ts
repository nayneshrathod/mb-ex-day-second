import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css'],
})
export class ForDirectiveComponent implements OnInit {
  firstExample = [1,2,3,4,5,6,7,8,9,10];
  constructor() {}

  ngOnInit(): void {
    this.example_of_map();
  }
   element = 0;
  example_of_map() {
    for (let i = 1; i <= 10; i++) {
      this.element = this.element + i;
    }
    return this.element;
  }
}
