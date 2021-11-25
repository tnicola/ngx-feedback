import { OnInit, ElementRef } from '@angular/core';
import { EventsService } from '../../services/events.service';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ModalComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ModalComponent, "ngx-feedback-modal", never, {}, {}, never, never>;
}

//# sourceMappingURL=modal.component.d.ts.map