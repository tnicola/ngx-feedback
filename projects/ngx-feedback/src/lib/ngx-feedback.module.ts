import { NgModule } from '@angular/core';
import { FeedbackButtonComponent } from './components/feedback-button/feedback-button.component';
import { ModalComponent } from './components/modal/modal.component';
import { ComponentLoaderService } from './services/component-loader.service';
import { ModalService } from './services/modal.service';
import { NgxFeedbackService } from './ngx-feedback.service';
import { CommonModule } from '@angular/common';
import { SelectorsService } from './services/selectors.service';

@NgModule({
    declarations: [FeedbackButtonComponent, ModalComponent],
    entryComponents: [FeedbackButtonComponent, ModalComponent],
    providers: [NgxFeedbackService, ComponentLoaderService, ModalService, SelectorsService],
    imports: [CommonModule],
    exports: []
})
export class NgxFeedbackModule {}
