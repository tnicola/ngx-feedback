import { NgModule } from '@angular/core';
import { FeedbackButtonComponent } from './components/feedback-button/feedback-button.component';
import { ModalComponent } from './components/modal/modal.component';
import { ComponentLoaderService } from './services/component-loader.service';
import { ModalService } from './services/modal.service';
import { NgxFeedbackService } from './ngx-feedback-maps.service';
import { CommonModule } from '@angular/common';
import { SelectorsService } from './services/selectors.service';
import { ButtonComponent } from './components/button/button.component';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { OrchestratorService } from './services/orchestrator.service';
import { EventsService } from './services/events.service';
import { StarComponent } from './components/star/star.component';
import { StarVoteComponent } from './components/star-vote/star-vote.component';
import * as i0 from "@angular/core";
export class NgxFeedbackModule {
}
NgxFeedbackModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgxFeedbackModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxFeedbackModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgxFeedbackModule, declarations: [FeedbackButtonComponent,
        ModalComponent,
        ButtonComponent,
        BackdropComponent,
        StarComponent,
        StarVoteComponent], imports: [CommonModule] });
NgxFeedbackModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgxFeedbackModule, providers: [NgxFeedbackService, OrchestratorService, ComponentLoaderService, ModalService, SelectorsService, EventsService], imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: NgxFeedbackModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZlZWRiYWNrLW1hcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZlZWRiYWNrLW1hcHMvc3JjL2xpYi9uZ3gtZmVlZGJhY2stbWFwcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQzs7QUFnQi9FLE1BQU0sT0FBTyxpQkFBaUI7OytHQUFqQixpQkFBaUI7Z0hBQWpCLGlCQUFpQixpQkFadEIsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixpQkFBaUIsYUFJWCxZQUFZO2dIQUdiLGlCQUFpQixhQUpmLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQyxZQUNsSCxDQUFDLFlBQVksQ0FBQzs0RkFHZCxpQkFBaUI7a0JBZDdCLFFBQVE7bUJBQUM7b0JBQ04sWUFBWSxFQUFFO3dCQUNWLHVCQUF1Qjt3QkFDdkIsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGlCQUFpQjt3QkFDakIsYUFBYTt3QkFDYixpQkFBaUI7cUJBQ3BCO29CQUNELGVBQWUsRUFBRSxDQUFDLHVCQUF1QixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsQ0FBQztvQkFDN0UsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztvQkFDM0gsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixPQUFPLEVBQUUsRUFBRTtpQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGZWVkYmFja0J1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mZWVkYmFjay1idXR0b24vZmVlZGJhY2stYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY29tcG9uZW50LWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBOZ3hGZWVkYmFja1NlcnZpY2UgfSBmcm9tICcuL25neC1mZWVkYmFjay1tYXBzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNlbGVjdG9yc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3NlbGVjdG9ycy5zZXJ2aWNlJztcbmltcG9ydCB7IEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYWNrZHJvcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYWNrZHJvcC9iYWNrZHJvcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT3JjaGVzdHJhdG9yU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvb3JjaGVzdHJhdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZXZlbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdGFyL3N0YXIuY29tcG9uZW50JztcbmltcG9ydCB7IFN0YXJWb3RlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N0YXItdm90ZS9zdGFyLXZvdGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgRmVlZGJhY2tCdXR0b25Db21wb25lbnQsXG4gICAgICAgIE1vZGFsQ29tcG9uZW50LFxuICAgICAgICBCdXR0b25Db21wb25lbnQsXG4gICAgICAgIEJhY2tkcm9wQ29tcG9uZW50LFxuICAgICAgICBTdGFyQ29tcG9uZW50LFxuICAgICAgICBTdGFyVm90ZUNvbXBvbmVudCxcbiAgICBdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW0ZlZWRiYWNrQnV0dG9uQ29tcG9uZW50LCBNb2RhbENvbXBvbmVudCwgQmFja2Ryb3BDb21wb25lbnRdLFxuICAgIHByb3ZpZGVyczogW05neEZlZWRiYWNrU2VydmljZSwgT3JjaGVzdHJhdG9yU2VydmljZSwgQ29tcG9uZW50TG9hZGVyU2VydmljZSwgTW9kYWxTZXJ2aWNlLCBTZWxlY3RvcnNTZXJ2aWNlLCBFdmVudHNTZXJ2aWNlXSxcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgICBleHBvcnRzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hGZWVkYmFja01vZHVsZSB7fVxuIl19