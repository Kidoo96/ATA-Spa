import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SpaDetailPage } from '../spa-detail/spa-detail';

/**
 * Generated class for the SpaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spa',
  templateUrl: 'spa.html',
})
export class SpaPage {

  public items:any = [];

  constructor(public navCtrl: NavController,
              public api:ApiProvider, 
              public navParams: NavParams) {
    
    this.getPosts();
  }

  getPosts(){
    this.api.get('wp/v2/posts?_embed').subscribe((data) => {
      this.items = data;
    });
  }

  openDetail(item){
    this.navCtrl.push(SpaDetailPage, {post:item});
  }

}
