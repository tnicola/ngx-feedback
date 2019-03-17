import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFeedbackModule } from 'ngx-feedback';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFeedbackModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
