import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { ApiServiceService } from '../../api-service.service';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { from } from 'rxjs';
// declare var google, map, infoWindow;
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  notification: string = "for";
  requestForMe: any;
  requestFromMe: any;

  constructor(private router: Router,
    public alertCtrl: AlertController,
    private http: Http,
    public api_service: ApiServiceService) { }

  ionViewDidEnter() {
    this.getRequestForme()
    this.getRequestForme()
  }

  ngOnInit() {

  }
  onAcceptRequest() {
    this.router.navigate(['/', 'accept'])
  }

  // RequestForMe
  async getRequestForme() {
    let token = this.api_service.user.Token.token
    // console.log('token', token)
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + token);

    console.log(headers);
    this.http.get(this.api_service.API_BASE + 'api/requestToMe', { headers: headers })
      .map((response) => response.json())
      .subscribe((res) => {
        console.log(res);
        this.requestForMe = res.data;
      },
        error => {
          console.log('here error', error);
        });
  }

  // RequestFromMe
  async getRequestFromme() {
    let token = this.api_service.user.Token.token
    // console.log('token', token)
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + token);

    console.log(headers);
    this.http.get(this.api_service.API_BASE + 'api/requestFromMe', { headers: headers })
      .map((response) => response.json())
      .subscribe((res) => {
        console.log(res);
        this.requestFromMe = res.data;
      },
        error => {
          console.log('here error', error);
        });
  }
}
