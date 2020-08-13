import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-time-validation-accept',
  templateUrl: './time-validation-accept.page.html',
  styleUrls: ['./time-validation-accept.page.scss'],
})
export class TimeValidationAcceptPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onDecline() {
    this.router.navigate(['/', 'feedback'])
  }
  onTime() {
    this.router.navigate(['/', 'time-validation-request'])
  }

}
