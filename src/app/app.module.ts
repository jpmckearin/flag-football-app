import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SettingsPage } from '../pages/settings/settings';
import { SubsPage } from '../pages/subs/subs';
import { StatsPage } from '../pages/stats/stats';
import { LineupPage } from '../pages/lineup/lineup';
import { TabsPage } from '../pages/tabs/tabs';
import { PipesModule  } from '../pipes/pipes.module';
import { PlayersProvider } from '../providers/players/players';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    SubsPage,
    StatsPage,
    LineupPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    SubsPage,
    StatsPage,
    LineupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlayersProvider
  ]
})
export class AppModule {}
