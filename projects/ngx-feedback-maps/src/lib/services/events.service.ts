import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FeedbackData } from '../models/feedback-data.model';

@Injectable({ providedIn: 'root' })
export class EventsService {
    constructor() {}

    private feedbackClick: Subject<any> = new Subject<any>();
    feedbackClickObservable: Observable<any> = this.feedbackClick.asObservable();

    private specificFeedbackClick: Subject<any> = new Subject<any>();
    specificFeedbackClickObservable: Observable<any> = this.specificFeedbackClick.asObservable();

    private genericFeedbackClick: Subject<any> = new Subject<any>();
    genericFeedbackClickObservable: Observable<any> = this.genericFeedbackClick.asObservable();

    private closeClick: Subject<any> = new Subject<any>();
    closeClickClickObservable: Observable<any> = this.closeClick.asObservable();

    private onSendClick: Subject<any> = new Subject<FeedbackData>();
    onSendClickObservable: Observable<FeedbackData> = this.onSendClick.asObservable();

    onSpecificFeedbackClick() {
        this.specificFeedbackClick.next();
    }

    onGenericFeedbackClik() {
        this.genericFeedbackClick.next();
    }
    onFeedbackButtonClick() {
        this.feedbackClick.next();
    }

    onCloseClicked() {
        this.closeClick.next();
    }

    onSendClicked(data: FeedbackData) {
        this.onSendClick.next(data);
    }
}
