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
import { DetailviewModal } from "../component/detailview/detailview.component";
import { PostContentsPage } from "../pages/post/contents/contents";
import { CommentPage } from "../pages/comment/comment";
import { ItemModal } from "../component/item/item.component";
import { BoardPage } from "../component/board/board.component";
import { CommentComponent } from "../component/comment/comment.component";

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
    PostContentsPage,
    ItemModal,
    BoardPage,
    CommentComponent,
    CommentPage
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
    PostContentsPage,
    ItemModal,
    BoardPage,
    CommentComponent,
    CommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
