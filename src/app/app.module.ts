import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaxService} from './max.service';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildAppComponent } from './child-app/child-app.component';
import { AdsComponent } from './ads/ads.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { FormsModule} from '@angular/forms';
import { UserService} from './user.service';
import { HttpClient } from '@angular/common/http/src/client';


@NgModule({
  declarations: [
    AppComponent,
    ChildAppComponent,
    AdsComponent,
    WelcomeComponent,
    AboutComponent
    UserListComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [MaxService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
