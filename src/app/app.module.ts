import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { NewsapiService } from './newsapi.service';
import { TopheadingComponent } from './topheading/topheading.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ NewsapiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
