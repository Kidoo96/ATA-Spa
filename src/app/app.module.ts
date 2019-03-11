import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { RoomsPage } from '../pages/rooms/rooms';
import { SpaPage } from '../pages/spa/spa';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';
import { SpaDetailPage } from '../pages/spa-detail/spa-detail';
import { RoomDetailPage } from '../pages/room-detail/room-detail';
import { BusinessPage } from '../pages/business/business';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    RoomsPage,
    SpaPage,
    SpaDetailPage,
    RoomDetailPage,
    BusinessPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    RoomsPage,
    SpaPage,
    SpaDetailPage,
    RoomDetailPage,
    BusinessPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
