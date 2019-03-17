import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
    selector: 'ngx-feedback-feedback-button',
    templateUrl: './feedback-button.component.html',
    styleUrls: ['./feedback-button.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class FeedbackButtonComponent implements OnInit {
    constructor(private modal: ModalService) {}

    ngOnInit() {}
    onClick() {
        this.modal.draw();
    }
}
