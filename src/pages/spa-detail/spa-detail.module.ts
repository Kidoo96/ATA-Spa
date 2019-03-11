import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaDetailPage } from './spa-detail';

@NgModule({
  declarations: [
    SpaDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(SpaDetailPage),
  ],
})
export class SpaDetailPageModule {}
