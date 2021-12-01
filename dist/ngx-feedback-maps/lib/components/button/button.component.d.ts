import { OnInit, EventEmitter } from '@angular/core';
export declare class ButtonComponent implements OnInit {
    click: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onClick(): void;
}
