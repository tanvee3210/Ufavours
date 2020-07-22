import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-timevalidation',
  templateUrl: './timevalidation.page.html',
  styleUrls: ['./timevalidation.page.scss'],
})
export class TimevalidationPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBack() {
    this.router.navigate(['/', 'profile'])
  }
}
