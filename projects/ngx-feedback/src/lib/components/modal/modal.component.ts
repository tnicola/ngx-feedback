import { Component, OnInit } from '@angular/core';
import { SelectorsService } from '../../services/selectors.service';

@Component({
    selector: 'ngx-feedback-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    imgSrc = '';
    visible = true;

    constructor(private selectorsService: SelectorsService) {}

    ngOnInit() {
        this.selectorsService.preview.subscribe(prev => {
            this.visible = true;
            this.imgSrc = prev;
        });
    }
    onSpecific() {
        this.selectorsService.elementsHighlight();
        this.visible = false;
    }

    onGeneric() {
        this.selectorsService.pageScreenshot();
        this.visible = false;
    }

    onSend() {}
}
