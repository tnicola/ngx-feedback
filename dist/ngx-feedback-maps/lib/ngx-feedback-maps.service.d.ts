import { ComponentLoaderService } from './services/component-loader.service';
import { FeedbackButtonComponent } from './components/feedback-button/feedback-button.component';
import { OrchestratorService } from './services';
import * as ɵngcc0 from '@angular/core';
export declare class NgxFeedbackService {
    private readonly componentLoader;
    private readonly orchestratorService;
    constructor(componentLoader: ComponentLoaderService<FeedbackButtonComponent>, orchestratorService: OrchestratorService);
    listenForFeedbacks(): import("rxjs").Subject<import("./models/feedback-data.model").FeedbackData>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxFeedbackService, never>;
}

//# sourceMappingURL=ngx-feedback-maps.service.d.ts.map