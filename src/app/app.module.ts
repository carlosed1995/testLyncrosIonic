import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ProvidersUsersProvider } from '../providers/providers-users/providers-users'; 
import { HttpClientModule } from '@angular/common/http'; 
 


@NgModule({
  declarations: [
    MyApp,  
  ], 
  imports: [
    BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp, 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProvidersUsersProvider
  ]
})
export class AppModule {}
