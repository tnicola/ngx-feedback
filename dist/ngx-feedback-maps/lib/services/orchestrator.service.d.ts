import { OnInit, OnDestroy } from '@angular/core';
import { ModalService } from './modal.service';
import { SelectorsService } from './selectors.service';
import { EventsService } from './events.service';
import { Subject } from 'rxjs';
import { FeedbackData } from '../models/feedback-data.model';
import * as i0 from "@angular/core";
export declare class OrchestratorService implements OnInit, OnDestroy {
    private readonly modalService;
    private readonly selectorsService;
    private readonly eventsService;
    private subscriptions;
    onSend: Subject<FeedbackData>;
    constructor(modalService: ModalService, selectorsService: SelectorsService, eventsService: EventsService);
    ngOnInit(): void;
    private onElementSelected;
    private onFeedbackButtonClick;
    private onSpecificFeedbackClick;
    private onGenericFeedbackClick;
    private onCloseClick;
    private onSendClick;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OrchestratorService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OrchestratorService>;
}