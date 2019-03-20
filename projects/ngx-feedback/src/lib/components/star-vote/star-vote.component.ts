import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'ngx-feedback-star-vote',
    templateUrl: './star-vote.component.html',
    styleUrls: ['./star-vote.component.scss']
})
export class StarVoteComponent implements OnInit {
    stars: any[] = [
        { type: 'empty', value: 1 },
        { type: 'empty', value: 2 },
        { type: 'empty', value: 3 },
        { type: 'empty', value: 4 },
        { type: 'empty', value: 5 }
    ];

    constructor() {}

    ngOnInit() {}

    onClick(index: number) {
        this.stars.forEach((s, i) => {
            if (i <= index) {
                s.type = 'full';
            } else {
                s.type = 'empty';
            }
        });
    }

    onMouseEnter(index: number) {
        this.stars.forEach((s, i) => {
            if (i <= index && s.type !== 'full') {
                s.type = 'temp';
            }
        });
    }

    onMouseLeave(index: number) {
        this.stars.forEach((s, i) => {
            if (s.type === 'temp') {
                s.type = 'empty';
            }
        });
    }
}
