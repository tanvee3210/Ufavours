import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { ApiServiceService } from '../../api-service.service';
// import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { from } from 'rxjs';
@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  constructor(private router: Router,
    public alertCtrl: AlertController,
    private http: Http,
    // private camera: Camera,
    private _ngZone: NgZone,
    public api_service: ApiServiceService) { }

  ngOnInit() {
  }
  onBack() {
    this.router.navigate(['/', 'accept'])
  }
}
