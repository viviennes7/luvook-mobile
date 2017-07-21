import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PostPage } from '../pages/post/post';
import { MyPage } from '../pages/my/my';
import { TimelinePage } from '../pages/timeline/timeline';
import { SearchPage } from '../pages/search/search';
import { TabsPage } from '../pages/tabs/tabs';
import { WelcomePage } from '../pages/welcome/welcome'
import { LoginPage } from '../pages/login/login';
import { JoinModal } from '../pages/login/join/join';
import { SettingModal } from '../pages/my/setting/setting';
import { DetailviewModal } from "../pages/common/detailview/detailview";
import { PostContentsPage } from "../pages/post/contents/contents";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PostPage,
    MyPage,
    TimelinePage,
    SearchPage,
    TabsPage,
    WelcomePage,
    LoginPage,
    JoinModal,
    SettingModal,
    DetailviewModal,
    PostContentsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostPage,
    MyPage,
    TimelinePage,
    SearchPage,
    TabsPage,
    WelcomePage,
    LoginPage,
    JoinModal,
    SettingModal,
    DetailviewModal,
    PostContentsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
