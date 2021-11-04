import { Injectable } from '@angular/core';
import { ComponentLoaderService } from './services/component-loader.service';
import { FeedbackButtonComponent } from './components/feedback-button/feedback-button.component';
import { OrchestratorService } from './services';

@Injectable({
    providedIn: 'root'
})
export class NgxFeedbackService {
    constructor(
        private readonly componentLoader: ComponentLoaderService<FeedbackButtonComponent>,
        private readonly orchestratorService: OrchestratorService
    ) {}

    listenForFeedbacks() {
        this.orchestratorService.ngOnInit();
        this.componentLoader.load(FeedbackButtonComponent);

        return this.orchestratorService.onSend;
    }
}
