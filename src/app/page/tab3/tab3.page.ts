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
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  slideOpts1 = {
    initialSlide: 1,
    slidesPerView: 5,
    speed: 400,
    loop: true,
    spaceBetween: 0,
    autoplay: true
  };
  reviewList: any;
  constructor(private router: Router,
    public alertCtrl: AlertController,
    private http: Http,
    public api_service: ApiServiceService) { }

  ngOnInit() {
    let id = this.api_service.user.data.id
    this.getReviewList()
  }
  onFilter() {
    this.router.navigate(['/', 'search'])
  }


  sliderImages1 = [
    {
      img: "assets/images/Ufavoursimages/001.png",
      id: 1,
      title: 'Pizza'
    },
    {
      img: "assets/images/Ufavoursimages/002.png",
      id: 2,
      title: 'Burger',
    },
    {
      img: "assets/images/Ufavoursimages/003.png",
      id: 3,
      title: 'Snacks',
    },
    {
      img: "assets/images/Ufavoursimages/004.png",
      id: 4,
      title: 'Sweets',

    },
    {
      img: "assets/images/Ufavoursimages/005.png",
      id: 5,
      title: 'Chinese',
    }
  ];

  async getReviewList() {
    let token = this.api_service.user.Token.token
    let id = this.api_service.user.data.id
    console.log('id', id)
    // console.log('token', token)
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + token);

    this.http.get(this.api_service.API_BASE + 'api/review_list/' + this.api_service.user.data.id, { headers: headers })
      .map((response) => response.json())
      .subscribe((res) => {
        console.log(res);
        this.reviewList = res.data;
      },
        error => {
          console.log('here error', error);
        });
  }
}
