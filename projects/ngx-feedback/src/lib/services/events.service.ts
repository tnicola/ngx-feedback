import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

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
}
