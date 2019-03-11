import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { RoomsPage } from '../rooms/rooms';
import { SpaPage } from '../spa/spa';
import { BusinessPage } from '../business/business';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openRoomsPage() {
    this.navCtrl.push(RoomsPage);
  }

  openLandingPage() {
  	this.navCtrl.push(LandingPage);
  }

  openSpaPage(){
    this.navCtrl.push(SpaPage);
  }

  openBusinessPage(){
    this.navCtrl.push(BusinessPage);
  }

}
