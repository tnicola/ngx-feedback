import { OnInit, EventEmitter } from '@angular/core';
export declare class StarVoteComponent implements OnInit {
    stars: any[];
    voted: EventEmitter<number>;
    constructor();
    ngOnInit(): void;
    onClick(index: number): void;
    onMouseEnter(index: number): void;
    onMouseLeave(index: number): void;
}
