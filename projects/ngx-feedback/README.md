# ngx-feedback 📸⭐💬
Angular user feedback library

ngx-feedback is an Angular library for collecting Web app users feedbacks. The user will be able to leave a review for the entire page or select a a specific feature and rate it, leaving a comment.

This library is meant to provide a fast, easy and clean way to collect user feedback through visible button and it provides a service that listens for incoming feedback and provides the data.

ngx-feedback relies upon an already existing javascript library [html2canvas](https://github.com/niklasvh/html2canvas) in order to take screenshots of the page.

### Features
- A feedback button will be attached automatically to the edge of the page.
- The possibility to choose for a generic or a specific feedback.
- A screenshot of the selected area on the page.

<div align="center">
	<img src ="https://github.com/tnicola/ngx-feedback/blob/master/docs/feedback.gif" />
</div>

## Demo

Look at the [demo](https://tnicola.github.io/ngx-feedback/). 

## Install
You'll need to install html2canvas lib (required peer-dependency) in order to be able to take screeshots:

    npm i html2canvas

Then you can install ngx-feedback:

    npm i ngx-feedback

## Usage
The usage is pretty simple, you just need to import `NgxFeedbackModule` and `NgxFeedbackService` and then start listening for feedbacks.

`app.module.ts`
```
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
    NgxFeedbackModule // Add this to your import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
`app.component.ts`
``` 

import { Component, OnInit } from '@angular/core';
import { NgxFeedbackService, FeedbackData } from 'ngx-feedback';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private readonly feedbackService: NgxFeedbackService) {}
    title = 'ngx-feedback-lib';

    ngOnInit() {
        this.feedbackService.listenForFeedbacks().subscribe((data: FeedbackData) => {
            // Use the data coming from the feedback here
        });
    }
}

```

## License
MIT
