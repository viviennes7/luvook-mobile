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
import { JoinPage } from '../pages/login/join/join';
import { SettingPage } from '../pages/my/setting/setting';
import { DetailViewComponent } from "../component/detailview/detailview.component";
import { PostContentsPage } from "../pages/post/contents/contents";
import { CommentPage } from "../pages/comment/comment";
import { ItemComponent } from "../component/item/item.component";
import { BoardComponent } from "../component/board/board.component";
import { CommentComponent } from "../component/comment/comment.component";
import { CommentWriteComponent } from "../component/comment/comment-write.component";
import { ImagePickerPage } from "../pages/image-picker/image-picker";
import { PhotoViewerUtil } from "../utils/photo-viewer";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import { ImagePicker } from '@ionic-native/image-picker';
import {Http, HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

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
    JoinPage,
    SettingPage,
    DetailViewComponent,
    PostContentsPage,
    ImagePickerPage,
    ItemComponent,
    BoardComponent,
    CommentComponent,
    CommentWriteComponent,
    CommentPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
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
    JoinPage,
    SettingPage,
    DetailViewComponent,
    PostContentsPage,
    ImagePickerPage,
    ItemComponent,
    BoardComponent,
    CommentComponent,
    CommentWriteComponent,
    CommentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    PhotoViewer,
    PhotoViewerUtil,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
