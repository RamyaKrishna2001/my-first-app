import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { userDetailsService } from '../register/user-details.service';

interface UserType {
  username: String;
  email: String;
  password: String;
  phoneNo: Number;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userName: String;
  userDetails: UserType;

  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private _userDetailsService: userDetailsService
  ) {}

  ngOnInit(): void {
    // this.userName = this._route.snapshot.paramMap.get('userName');
    this._route.params.subscribe((data) => {
      this.userName = data.userName;
    });
    const userList = this._userDetailsService.getUsers();
    this.setUserDetails(userList);
  }

  setUserDetails(userDetails) {
    const user = userDetails.find((item) => item.username === this.userName);
    if (user) {
      this.userDetails = user;
    }
  }
}
