import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { ApiServiceService } from '../../api-service.service';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { from } from 'rxjs';
import { Console } from 'console';
declare var google, map, infoWindow;

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  sender_id: any;
  receiver_id: any;
  token: any;
  message_type: any;
  message: any;
  userExist: any;

  constructor(private router: Router,
    public alertCtrl: AlertController,
    private http: Http,
    public api_service: ApiServiceService) { }

  ngOnInit() {
    this.userExist = this.api_service.user.data
    console.log('userExist', this.userExist)
    this.sender_id = this.api_service.user.data.id
    console.log('sender_id', this.sender_id)
  }
  onBack() {
    this.router.navigate(['/', 'profile'])
  }

  async onSend() {
    let token = await this.api_service.user.Token.token;
    token = "Bearer " + token;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", token);
    // let options:any = {headers:headers} 

    let body = {
      sender_id: this.api_service.user.data.id,
      receiver_id: this.receiver_id,
      message_type: 0,
      message: this.message,
    };
    // let dataObj: any = {
    //   //token: JSON.parse(token),
    //   sender_id: this.api_service.user.id,
    //   receiver_id: this.api_service.selectedInbox.id,
    //   message_type: 0,
    //   message: this.message,
    //   sender_name: this.api_service.user.name
    //   }

    this.http.post(this.api_service.API_BASE + 'api/send_message', JSON.stringify(body), { headers: headers })
      .map((response) => response.json())
      .subscribe((data) => {
        this.getMessages(data);
      },
        (error) => {
          console.log(error);
          //this.getusererror();
        })
  }

  async getMessages(u: any) {
    const alert = await this.alertCtrl.create({
      message: "Message Send Successfully!.",
      buttons: [
        {
          text: "OK"
        }
      ]
    })
    await alert.present();
  }
}
