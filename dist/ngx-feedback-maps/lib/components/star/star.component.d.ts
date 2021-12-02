import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class StarComponent implements OnInit {
    type: 'full' | 'empty' | 'temp';
    click: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StarComponent, "ngx-feedback-star", never, { "type": "type"; }, { "click": "click"; }, never, never>;
}
