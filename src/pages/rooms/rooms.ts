import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { RoomDetailPage } from '../room-detail/room-detail';

/**
 * Generated class for the RoomsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rooms',
  templateUrl: 'rooms.html',
})
export class RoomsPage {

  public rooms:any = [];

  constructor(public navCtrl: NavController, 
              public api:ApiProvider, public navParams: NavParams) {

      this.getRooms();
    }

    getRooms(){
      this.api.get('rest-routes/v2/demo').subscribe((data) =>{
        this.rooms = data;
      });
    }

    openDetail(room){
      this.navCtrl.push(RoomDetailPage, {post:room});
    }


  }
