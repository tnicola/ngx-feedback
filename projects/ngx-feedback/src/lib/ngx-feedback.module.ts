import { NgModule } from '@angular/core';
import { FeedbackButtonComponent } from './components/feedback-button/feedback-button.component';
import { ModalComponent } from './components/modal/modal.component';
import { ComponentLoaderService } from './services/component-loader.service';
import { ModalService } from './services/modal.service';
import { NgxFeedbackService } from './ngx-feedback.service';
import { CommonModule } from '@angular/common';
import { SelectorsService } from './services/selectors.service';
import { ButtonComponent } from './components/button/button.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { OrchestratorService } from './services/orchestrator.service';
import { EventsService } from './services/events.service';
import { StarComponent } from './components/star/star.component';
import { StarVoteComponent } from './components/star-vote/star-vote.component';

@NgModule({
    declarations: [
        FeedbackButtonComponent,
        ModalComponent,
        ButtonComponent,
        BackdropComponent,
        StarComponent,
        StarVoteComponent,
    ],
    entryComponents: [FeedbackButtonComponent, ModalComponent, BackdropComponent],
    providers: [NgxFeedbackService, OrchestratorService, ComponentLoaderService, ModalService, SelectorsService, EventsService],
    imports: [CommonModule],
    exports: []
})
export class NgxFeedbackModule {}
