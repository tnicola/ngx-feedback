import { ComponentLoaderService } from './services/component-loader.service';
import { FeedbackButtonComponent } from './components/feedback-button/feedback-button.component';
import { OrchestratorService } from './services';
import * as i0 from "@angular/core";
export declare class NgxFeedbackService {
    private readonly componentLoader;
    private readonly orchestratorService;
    constructor(componentLoader: ComponentLoaderService<FeedbackButtonComponent>, orchestratorService: OrchestratorService);
    listenForFeedbacks(): import("rxjs").Subject<import("ngx-feedback-maps").FeedbackData>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxFeedbackService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxFeedbackService>;
}
