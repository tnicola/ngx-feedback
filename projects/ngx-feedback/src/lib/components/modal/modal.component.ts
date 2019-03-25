import { Component, OnInit } from '@angular/core';
import { EventsService } from 'ngx-feedback/lib/services/events.service';

@Component({
    selector: 'ngx-feedback-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    imgSrc = '';
    enterSpecific: boolean;
    enterGeneric: boolean;
    voted: boolean;
    constructor(private readonly eventsService: EventsService) {}

    ngOnInit() {}
    onSpecific() {
        this.eventsService.onSpecificFeedbackClick();
    }

    onGeneric() {
        this.eventsService.onGenericFeedbackClik();
    }

    onCloseClicked() {
        this.eventsService.onCloseClicked();
    }

    setPreview(preview: any) {
        this.imgSrc = preview;
    }

    onVote() {
        this.voted = true;
    }

    onSend() {}
}
