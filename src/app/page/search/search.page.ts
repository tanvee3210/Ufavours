import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { ApiServiceService } from '../../api-service.service';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { from } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private router: Router,
    public alertCtrl: AlertController,
    private http: Http,
    private _ngZone: NgZone,
    public api_service: ApiServiceService) { }

  ngOnInit() {
  }
  onBack() {
    this.router.navigate(['/', 'tab3'])
  }
}
