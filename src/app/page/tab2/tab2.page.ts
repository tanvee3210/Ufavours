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
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  Skilllist: any = [];
  createprofile = true
  qualificationList: any = [];
  fname: any;
  lname: any;
  skill: any;
  job: any;
  city: any;
  pincode: any;
  qualification: any;
  getcreateProfile: any;

  constructor(private router: Router,
    public alertCtrl: AlertController,
    private http: Http,
    public api_service: ApiServiceService) { }

  ionViewDidEnter() {
    this.api_service.user.data
    this.getSkilllist();
    this.getQualification()
  }
  userdetailes: any
  data: any ={}
  ngOnInit() {
    this.userdetailes = JSON.parse(localStorage.getItem("userDetails"))
    this.data = this.userdetailes.data.name
    this.showdata()
    debugger
  }

  showdata() {
    if (this.userdetailes.data.name) {
      this.createprofile = false
    } else {
      this.createprofile = true
    }
  }

  validation(text){
    if(text == "validation"){
      this.router.navigate(['/', 'timevalidation'])
    } else{
      this.router.navigate(['/', 'message'])
    }
  }

  onDone() {
    this.router.navigate(['/', 'profile'])
  }
  // skilllist
  async getSkilllist() {
    let token = this.api_service.user.Token.token
    // console.log('token', token)
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + token);

    console.log(headers);
    this.http.get(this.api_service.API_BASE + 'api/skill_list', { headers: headers })
      .map((response) => response.json())
      .subscribe((res) => {
        console.log(res);
        this.Skilllist = res.data;
      },
        error => {
          console.log('here error', error);
        });
  }

  // qualificationlist
  async getQualification() {
    var token = this.api_service.user.Token.token
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + token);

    console.log(headers);
    this.http.get(this.api_service.API_BASE + 'api/qualification', { headers: headers })
      .map((response) => response.json())
      .subscribe((res) => {
        console.log(res);
        this.qualificationList = res.data;
      },
        error => {
          console.log('here error', error);
        });
  }


  onLogout() {
    localStorage.clear()
    this.router.navigate(['/', 'login'])
  }

  // updateprofile
  async onUpdate() {
    let token = await this.api_service.user.Token.token;
    token = "Bearer " + token;
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", token);
    let options: any = { headers: headers };

    if (this.fname && this.lname && this.skill && this.job && this.city && this.pincode && this.qualification) {
      let userObj = {
        fname: this.fname,
        lname: this.lname,
        skill: this.skill,
        job: this.job,
        city: this.city,
        pincode: this.pincode,
        qualification: this.qualification
      }

      this.http.post(this.api_service.API_BASE + 'api/update_profile', userObj, options)
        .map((response) => response.json())
        .subscribe((data) => {
          this.getUserData(data);
        },
          (error) => {
            console.log(error);
            //this.getusererror();
          })
    }
    else {
      const alert = await this.alertCtrl.create({
        message: "All Fields are required ",
        buttons: [
          {
            text: "OK"
          }
        ]
      })
      await alert.present();
    }

  }


  async getUserData(u: any) {
    this.api_service.user.data = u.data;
    console.log("here check", u.data);
    this.api_service.updateUser();
    const alert = await this.alertCtrl.create({
      message: "Profile is Updated Successfully!.",
      buttons: [
        {
          text: "OK"
        }
      ]
    })
    await alert.present();
    this.createprofile = false
  }
}
