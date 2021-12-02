import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class StarVoteComponent implements OnInit {
    stars: any[];
    voted: EventEmitter<number>;
    constructor();
    ngOnInit(): void;
    onClick(index: number): void;
    onMouseEnter(index: number): void;
    onMouseLeave(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StarVoteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StarVoteComponent, "ngx-feedback-star-vote", never, {}, { "voted": "voted"; }, never, never>;
}
