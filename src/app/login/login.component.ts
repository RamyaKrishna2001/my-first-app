import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userDetailsService } from '../register/user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // login: { username: string; password: string };
  signinForm: FormGroup;

  constructor(
    private router: Router,
    private userDetailsService: userDetailsService
  ) {}

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]'),
      ]),
    });
  }

  onSigninSubmit() {
    const userMatch = this.userDetailsService.validateUser(
      this.signinForm.value
    );
    if (userMatch) {
      this.router.navigate(['/users']);
    } else {
      alert('Invalid Credentials');
    }
    this.signinForm.reset();
  }

  onLoadRegister() {
    this.router.navigate(['/register']);
  }
}
