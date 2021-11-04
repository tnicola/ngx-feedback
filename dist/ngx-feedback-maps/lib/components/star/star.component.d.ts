import { OnInit, EventEmitter } from '@angular/core';
export declare class StarComponent implements OnInit {
    type: 'full' | 'empty' | 'temp';
    click: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    onClick(): void;
}
