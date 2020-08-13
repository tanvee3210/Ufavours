import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-othersprofile',
  templateUrl: './othersprofile.page.html',
  styleUrls: ['./othersprofile.page.scss'],
})
export class OthersprofilePage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  timeValidationRequest() {
    this.router.navigate(['/', 'time-validation-request'])
  }
  onReviews() {
    this.router.navigate(['/', 'review'])
  }
  onMessage() {
    this.router.navigate(['/', 'send-message'])
  }
}
