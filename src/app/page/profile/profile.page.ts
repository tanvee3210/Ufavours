import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
// import { Http, Response } from '@angular/http';
// import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';
// import 'rxjs/Rx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router: Router,
    public alertCtrl: AlertController) { }

  ngOnInit() {
  }
  onBack() {
    this.router.navigate(['/', 'tab2'])
  }
  onTime() {
    this.router.navigate(['/', 'timevalidation'])
  }
  onMessage() {
    this.router.navigate(['/', 'message'])
  }

  async onLogout() {
    const alert = await this.alertCtrl.create({
      message: "Do you really want to logout ?",
      buttons: [
        {
          text: "YES",
          handler: data => {
            this.router.navigate(['/', 'login'])
            localStorage.clear();
          }
        },
        {
          text: "NO"
        }
      ]
    });
    await alert.present();
  }
}
