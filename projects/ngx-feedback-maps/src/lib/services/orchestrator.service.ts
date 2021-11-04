import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';
import { SelectorsService } from './selectors.service';
import { EventsService } from './events.service';
import { Subscription, Subject } from 'rxjs';
import { FeedbackData } from '../models/feedback-data.model';

@Injectable({ providedIn: 'root' })
export class OrchestratorService implements OnInit, OnDestroy {
    private subscriptions: Subscription[] = [];

    onSend: Subject<FeedbackData> = new Subject<FeedbackData>();
    constructor(
        private readonly modalService: ModalService,
        private readonly selectorsService: SelectorsService,
        private readonly eventsService: EventsService
    ) {}

    ngOnInit() {
        this.subscriptions.push(
            this.onFeedbackButtonClick(),
            this.onSpecificFeedbackClick(),
            this.onGenericFeedbackClick(),
            this.onElementSelected(),
            this.onCloseClick(),
            this.onSendClick()
        );
    }

    private onElementSelected() {
        return this.selectorsService.preview.subscribe(prev => {
            this.modalService.openWithPreview(prev);
        });
    }

    private onFeedbackButtonClick() {
        return this.eventsService.feedbackClickObservable.subscribe(() => {
            this.modalService.draw();
        });
    }

    private onSpecificFeedbackClick() {
        return this.eventsService.specificFeedbackClickObservable.subscribe(() => {
            this.modalService.remove();
            this.selectorsService.elementsHighlight();
        });
    }

    private onGenericFeedbackClick() {
        return this.eventsService.genericFeedbackClickObservable.subscribe(() => {
            this.modalService.remove();
            this.selectorsService.pageScreenshot();
        });
    }

    private onCloseClick() {
        return this.eventsService.closeClickClickObservable.subscribe(() => {
            this.modalService.remove();
        });
    }

    private onSendClick() {
        return this.eventsService.onSendClickObservable.subscribe((data: FeedbackData) => {
            this.onSend.next(data);
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
}
