import { OnInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class StarVoteComponent implements OnInit {
    stars: any[];
    voted: EventEmitter<number>;
    constructor();
    ngOnInit(): void;
    onClick(index: number): void;
    onMouseEnter(index: number): void;
    onMouseLeave(index: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StarVoteComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StarVoteComponent, "ngx-feedback-star-vote", never, {}, { "voted": "voted"; }, never, never>;
}

//# sourceMappingURL=star-vote.component.d.ts.map