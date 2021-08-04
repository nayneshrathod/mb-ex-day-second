import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-emicalculator',
  templateUrl: './emicalculator.component.html',
  styleUrls: ['./emicalculator.component.css']
})
export class EMICalculatorComponent {
  EMI = 0;
  interest = 0;
  principal_amount = 0;
  interest_rate = 0;
  total_months = 0;

  addressForm = this.fb.group({
    principal_amount: [null, Validators.required],
    interest_rate: [null, Validators.required],
    total_months: [null, Validators.required],
  });


  constructor(private fb: FormBuilder) {
  }

  onSubmit(): void {
    if (this.addressForm.invalid) {
      return;
    }
    this.principal_amount = this.addressForm.value.principal_amount;
    this.interest_rate = this.addressForm.value.interest_rate;
    this.total_months = this.addressForm.value.total_months;

    this.interest_rate = this.interest_rate / 100;

    this.interest = this.principal_amount * this.interest_rate * this.total_months;
    this.EMI = this.principal_amount + this.interest;


    console.log('EMI -  ' + this.EMI);
  }
}
