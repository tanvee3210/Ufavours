import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-accept',
  templateUrl: './accept.page.html',
  styleUrls: ['./accept.page.scss'],
})
export class AcceptPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBack() {
    this.router.navigate(['/', 'tab4'])
  }
  onDecline() {
    this.router.navigate(['/', 'feedback'])
  }
}
