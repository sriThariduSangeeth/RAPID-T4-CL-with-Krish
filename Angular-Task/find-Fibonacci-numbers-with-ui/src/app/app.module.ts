import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FindFibonacciNumComponent } from './find-fibonacci-num/find-fibonacci-num.component';
import { NumberSuffixPipe } from './pipe/dateSuffix.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FindFibonacciNumComponent,
    NumberSuffixPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
