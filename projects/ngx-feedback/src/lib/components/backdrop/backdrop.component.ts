import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ngx-feedback-backdrop',
    templateUrl: './backdrop.component.html',
    styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {
    @Output()
    click: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {}

    onClick() {
        this.click.emit();
    }
}
