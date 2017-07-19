import { Component } from '@angular/core';

import { PostPage } from '../post/post';
import { MyPage } from '../my/my';
import { TimelinePage } from '../timeline/timeline';
import { SearchPage } from '../search/search';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TimelinePage;
  tab2Root = SearchPage;
  tab3Root = PostPage;
  tab4Root = MyPage;

  constructor() {

  }
}
