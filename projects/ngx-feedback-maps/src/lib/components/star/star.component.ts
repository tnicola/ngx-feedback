import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-feedback-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {
    @Input()
    type: 'full' | 'empty' | 'temp';

    @Output()
    click: EventEmitter<any> = new EventEmitter();
    constructor() {}

    ngOnInit() {}

    onClick() {
        this.click.emit();
    }
}
