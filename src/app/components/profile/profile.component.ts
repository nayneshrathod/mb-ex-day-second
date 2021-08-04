import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  fibonacci:number[];
  constructor(private _snackBar: MatSnackBar) {
    this.fibonacci  = [0, 1];

  }

  listFibonacci(num: number) {
    for (let i: number = 2; i < num; i++) {
      this.fibonacci [i] = this.fibonacci[i - 2] + this.fibonacci[i - 1];
    }
    this._snackBar.open(String(this.fibonacci[num-1]), String(num))
    return this.fibonacci;
  }

  // console.log(this.listFibonacci(10));


  openSnackBar(fibnum: string) {
    this.listFibonacci(parseInt(fibnum))
    // this._snackBar.open(message, action);
  }

  ngOnInit(): void {
    this.fibonacci  = [0, 1];
  }

}
