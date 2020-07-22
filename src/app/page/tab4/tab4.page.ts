import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  notification: string = "for";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  onRequests() {
    this.router.navigate(['/', 'accept'])
  }

}
