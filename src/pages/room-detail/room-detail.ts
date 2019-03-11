import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoomDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-room-detail',
  templateUrl: 'room-detail.html',
})
export class RoomDetailPage {
  
  public room:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    ) {
    this.room = navParams.get('post');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoomDetailPage');
  }

  check(){
    console.log('click');
  }




}
