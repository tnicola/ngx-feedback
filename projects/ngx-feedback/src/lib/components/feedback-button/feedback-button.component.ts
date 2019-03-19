import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { OrchestratorService } from '../../services/orchestrator.service';
import { EventsService } from 'ngx-feedback/lib/services/events.service';

@Component({
    selector: 'ngx-feedback-main-btn',
    templateUrl: './feedback-button.component.html',
    styleUrls: ['./feedback-button.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FeedbackButtonComponent implements OnInit {
    constructor(private eventsService: EventsService) {}

    ngOnInit() {}
    onClick() {
        this.eventsService.onFeedbackButtonClick();
    }
}
