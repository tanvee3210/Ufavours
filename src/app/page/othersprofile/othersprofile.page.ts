import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Http, Response, Headers } from '@angular/http';
import { ApiServiceService } from '../../api-service.service';
@Component({
  selector: 'app-othersprofile',
  templateUrl: './othersprofile.page.html',
  styleUrls: ['./othersprofile.page.scss'],
})
export class OthersprofilePage implements OnInit {
  pageName:any;
  otherDetails:any;
  id:any;
  
  constructor(private router: Router,public route:ActivatedRoute,
    public http:Http,
    public api_service:ApiServiceService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    debugger
    this.route.queryParams.subscribe(params => {
      if (params && params.pagename) {
        this.pageName = params.pagename;
      }
      if (params && params.id) {
        this.id =parseInt(params.id);
        this.getOtherUserDetail();
      }
    });
  } 

  backButton(){
    this.router.navigate(['/', this.pageName])
  }
//get Other user details using id
  getOtherUserDetail(){
    let token = this.api_service.user.Token.token
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + token);

    console.log(headers);
    this.http.get(this.api_service.API_BASE + 'api/get_user/'+this.id, { headers: headers })
      .map((response) => response.json())
      .subscribe((res) => {
        console.log(res);
        this.otherDetails = res.data;
      },
        error => {
          console.log('here error', error);
        });
  }
  timeValidationRequest() {
    this.router.navigate(['/', 'time-validation-request'])
  }
  onReviews() {
    this.router.navigate(['/', 'review'], { queryParams: { id: this.id} })
  }
  onMessage() {
    this.router.navigate(['/', 'send-message'])
  }
}
