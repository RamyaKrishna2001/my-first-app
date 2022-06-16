import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { userDetailsService } from '../register/user-details.service';

@Component({
  selector: 'app-wraper',
  templateUrl: './wraper.component.html',
  styleUrls: ['./wraper.component.css'],
})
export class WraperComponent implements OnInit {
  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private _userDetailsService: userDetailsService
  ) {}

  ngOnInit(): void {
    // this._route.params.subscribe((val) => {
    //   console.log(val);
    // });
  }

  onLoadLogin() {
    this.router.navigate(['/']);
  }
}
