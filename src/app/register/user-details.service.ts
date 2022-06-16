import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class userDetailsService implements OnInit {
  loginSuccessful: boolean = false;
  users = [
    {
      username: 'ramya',
      email: 'ramyakrishna@gmail.com',
      password: 'Ramya123',
      phoneNo: 7993140266,
    },
    {
      username: 'pavan',
      email: 'pavan@gmail.com',
      password: 'Pavan123',
      phoneNo: 4857123695,
    },
    {
      username: 'samyuktha',
      email: 'samyuktha@gmail.com',
      password: 'Samyu123',
      phoneNo: 2574123695,
    },
    {
      username: 'krishna',
      email: 'krishna@gmail.com',
      password: 'Krishna123',
      phoneNo: 3251478963,
    },
    {
      username: 'pallavi',
      email: 'pallavi@gmail.com',
      password: 'Pallavi123',
      phoneNo: 9654712583,
    },
    {
      username: 'shravz',
      email: 'shravz@gmail.com',
      password: 'Shravz123',
      phoneNo: 9654712583,
    },
    {
      username: 'himani',
      email: 'himani@gmail.com',
      password: 'Himani123',
      phoneNo: 9654712583,
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addUser(user) {
    this.users.push(user);
    localStorage.setItem('Users', JSON.stringify(this.users));
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('Users'));
  }

  removeUser(userName) {
    const usersList = JSON.parse(localStorage.getItem('Users'));
    this.users = usersList.filter(
      (user) => user.username.toLowerCase() !== userName.toLowerCase()
    );
    console.log(this.users);
    localStorage.setItem('Users', JSON.stringify(this.users));
    return this.users;
  }

  validateUser(user) {
    let usersData = JSON.parse(localStorage.getItem('Users'));
    this.loginSuccessful = false;
    usersData.forEach((eachUser) => {
      if (
        user.username === eachUser.username &&
        user.password === eachUser.password
      ) {
        this.loginSuccessful = true;
      }
    });
    return this.loginSuccessful;
  }

  updateUser(updatedUser) {
    const usersList = JSON.parse(localStorage.getItem('Users'));
    const index = usersList.findIndex(
      (user) => user.email === updatedUser.email
    );
    if (index !== -1) {
      usersList[index] = updatedUser;
      localStorage.setItem('Users', JSON.stringify(usersList));
    }
    return usersList;
  }
}
