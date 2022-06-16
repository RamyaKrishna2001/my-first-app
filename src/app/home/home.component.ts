// import $ from 'jquery';
import { Component, OnInit, ViewChild } from '@angular/core';
import { userDetailsService } from '../register/user-details.service';
import { Router } from '@angular/router';

interface UserType {
  username: String;
  email: String;
  password: String;
  phoneNo: Number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // @ViewChild('closebutton') closebutton;

  userDetails: UserType[];
  userName: String;
  user: UserType;

  constructor(
    private router: Router,
    private userDetailsService: userDetailsService
  ) {
    this.userDetails = this.userDetailsService.getUsers();
  }

  ngOnInit(): void {}

  deleteUser() {
    this.userDetails = this.userDetailsService.removeUser(this.userName);
  }

  openModal(userName) {
    this.userName = userName;
  }

  setUserDetails(details) {
    this.user = { ...details };
  }

  updateUser() {
    this.userDetails = this.userDetailsService.updateUser(this.user);
  }

  navigateToUserInfo(userName) {
    this.router.navigate([`${this.router.url}/${userName}`]);
  }

  // public onDisplay(details) {
  //   this.user = { ...details };
  //   this.closebutton.nativeElement.click();
  // }
  // (click)="onDisplay(data)"
}
