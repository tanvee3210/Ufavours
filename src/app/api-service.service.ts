import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  API_BASE = 'https://ufavours.sdssoftltd.co.uk/';
  constructor(public http: HttpClient, public loadingCtrl: LoadingController, private toastCtrl: ToastController) { }
  loader = null;
  async showLoader() {
    this.loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    this.loader.present();
  }

  async toaster(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "bottom"
    });
    toast.present();
  }

  async hideLoader() {
    await this.loader.dismiss();
  }

  async clickSignup() {

  }

  async clickLogin() {

  }
}


