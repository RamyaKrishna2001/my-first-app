import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userDetailsService } from './user-details.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private router: Router,
    private userDetailsService: userDetailsService
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      phoneNo: new FormControl(null, [
        Validators.required,
        Validators.maxLength(10),
      ]),
    });
  }

  //submit button functionality
  onSignupSubmit() {
    this.userDetailsService.addUser(this.registerForm.value);
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }
}
