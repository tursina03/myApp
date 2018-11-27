import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ActionPage } from '../pages/action/action';//./  //tambah menu - action

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ActionPage //tambah menu - action
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      'iconMode':'ios',
      'tabsLayout':'icon-left',
      platforms:{
        ios:{'tabsPlacement':'bottom'},
        android:{'tabsPlacement':'top'}
      }

      //utk buat menu nav tambah ni
      /*,{
        'iconMode':'ios',
        'tabsLayout':'icon-left',
        platforms:{
          ios:{'tabsPlacement':'bottom'},
          android:{'tabsPlacement':'top'}
        }
        */
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ActionPage //tambah menu - action
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
