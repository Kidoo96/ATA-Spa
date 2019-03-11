import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spa-detail',
  templateUrl: 'spa-detail.html',
})
export class SpaDetailPage {

  public post:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.post = navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaDetailPage');
  }

}
