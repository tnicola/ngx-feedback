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
        this.feedbackService.listenForFeedbacks().subscribe((data: FeedbackData) => {});
    }
}
