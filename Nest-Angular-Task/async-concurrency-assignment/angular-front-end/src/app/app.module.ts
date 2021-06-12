import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnagramComponent } from './anagram/anagram.component';
import { FindLargeNumberComponent } from './find-large-number/find-large-number.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsyncApiService } from './services/async-api.service';
import { OccurenceComponent } from './occurence/occurence.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DashboardComponent,
    AnagramComponent,
    FindLargeNumberComponent,
    OccurenceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [AsyncApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
