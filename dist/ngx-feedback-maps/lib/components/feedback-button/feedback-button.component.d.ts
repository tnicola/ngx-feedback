import { OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import * as i0 from "@angular/core";
export declare class FeedbackButtonComponent implements OnInit {
    private eventsService;
    constructor(eventsService: EventsService);
    ngOnInit(): void;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeedbackButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FeedbackButtonComponent, "ngx-feedback-main-btn", never, {}, {}, never, never>;
}
