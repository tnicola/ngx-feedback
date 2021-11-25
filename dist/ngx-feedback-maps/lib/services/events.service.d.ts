import { Observable } from 'rxjs';
import { FeedbackData } from '../models/feedback-data.model';
import * as ɵngcc0 from '@angular/core';
export declare class EventsService {
    constructor();
    private feedbackClick;
    feedbackClickObservable: Observable<any>;
    private specificFeedbackClick;
    specificFeedbackClickObservable: Observable<any>;
    private genericFeedbackClick;
    genericFeedbackClickObservable: Observable<any>;
    private closeClick;
    closeClickClickObservable: Observable<any>;
    private onSendClick;
    onSendClickObservable: Observable<FeedbackData>;
    onSpecificFeedbackClick(): void;
    onGenericFeedbackClik(): void;
    onFeedbackButtonClick(): void;
    onCloseClicked(): void;
    onSendClicked(data: FeedbackData): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EventsService, never>;
}

//# sourceMappingURL=events.service.d.ts.map