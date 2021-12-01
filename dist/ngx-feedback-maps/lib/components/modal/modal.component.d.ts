import { OnInit, ElementRef } from '@angular/core';
import { EventsService } from '../../services/events.service';
export declare class ModalComponent implements OnInit {
    private readonly eventsService;
    imgSrc: string;
    enterSpecific: boolean;
    enterGeneric: boolean;
    voted: boolean;
    thanks: boolean;
    url: string;
    noImageSrc: string;
    comment: ElementRef;
    private formData;
    constructor(eventsService: EventsService);
    ngOnInit(): void;
    onSpecific(): void;
    onGeneric(): void;
    onCloseClicked(): void;
    setPreview(preview: any): void;
    onVote(rate: any): void;
    onSend(): void;
}
