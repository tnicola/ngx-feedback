import { Injectable, OnInit } from '@angular/core';
import { ComponentLoaderService } from './services/component-loader.service';
import { FeedbackButtonComponent } from './components/feedback-button/feedback-button.component';

@Injectable({
    providedIn: 'root'
})
export class NgxFeedbackService implements OnInit {
    constructor(private readonly componentLoader: ComponentLoaderService<FeedbackButtonComponent>) {
        this.componentLoader.load(FeedbackButtonComponent);
    }

    ngOnInit() {}
}
