import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FindVowelsSortComponent } from './find-vowels-sort/find-vowels-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    FindVowelsSortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
