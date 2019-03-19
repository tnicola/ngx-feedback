import { Component, OnInit } from '@angular/core';
import { OrchestratorService } from '../../services/orchestrator.service';
import { EventsService } from 'ngx-feedback/lib/services/events.service';

@Component({
    selector: 'ngx-feedback-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    imgSrc = '';
    visible = true;

    constructor(private readonly eventsService: EventsService) {}

    ngOnInit() {}
    onSpecific() {
        this.eventsService.onSpecificFeedbackClick();
    }

    onGeneric() {
        this.eventsService.onGenericFeedbackClik();
    }

    setPreview(preview: any) {
        this.imgSrc = preview;
    }

    onSend() {}
}
