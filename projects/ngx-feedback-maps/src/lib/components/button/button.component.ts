import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-feedback-btn',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
    @Output()
    click: EventEmitter<any> = new EventEmitter<any>();

    constructor() {}

    ngOnInit() {}

    onClick() {
        this.click.emit();
    }
}
