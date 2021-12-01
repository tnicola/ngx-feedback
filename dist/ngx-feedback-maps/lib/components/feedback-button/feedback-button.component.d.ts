import { OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
export declare class FeedbackButtonComponent implements OnInit {
    private eventsService;
    constructor(eventsService: EventsService);
    ngOnInit(): void;
    onClick(): void;
}
