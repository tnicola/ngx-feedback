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
export class NgxFeedbackModule {
}
NgxFeedbackModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZlZWRiYWNrLW1hcHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZlZWRiYWNrLW1hcHMvc3JjL2xpYi9uZ3gtZmVlZGJhY2stbWFwcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQWdCL0UsTUFBTSxPQUFPLGlCQUFpQjs7O1lBZDdCLFFBQVEsU0FBQztnQkFDTixZQUFZLEVBQUU7b0JBQ1YsdUJBQXVCO29CQUN2QixjQUFjO29CQUNkLGVBQWU7b0JBQ2YsaUJBQWlCO29CQUNqQixhQUFhO29CQUNiLGlCQUFpQjtpQkFDcEI7Z0JBQ0QsZUFBZSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixDQUFDO2dCQUM3RSxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDO2dCQUMzSCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLE9BQU8sRUFBRSxFQUFFO2FBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmVlZGJhY2tCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmVlZGJhY2stYnV0dG9uL2ZlZWRiYWNrLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50JztcbmltcG9ydCB7IENvbXBvbmVudExvYWRlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2NvbXBvbmVudC1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmd4RmVlZGJhY2tTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtZmVlZGJhY2stbWFwcy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTZWxlY3RvcnNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWxlY3RvcnMuc2VydmljZSc7XG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmFja2Ryb3BDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYmFja2Ryb3AvYmFja2Ryb3AuY29tcG9uZW50JztcbmltcG9ydCB7IE9yY2hlc3RyYXRvclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL29yY2hlc3RyYXRvci5zZXJ2aWNlJztcbmltcG9ydCB7IEV2ZW50c1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2V2ZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3Rhci9zdGFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGFyVm90ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zdGFyLXZvdGUvc3Rhci12b3RlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEZlZWRiYWNrQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBNb2RhbENvbXBvbmVudCxcbiAgICAgICAgQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBCYWNrZHJvcENvbXBvbmVudCxcbiAgICAgICAgU3RhckNvbXBvbmVudCxcbiAgICAgICAgU3RhclZvdGVDb21wb25lbnQsXG4gICAgXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtGZWVkYmFja0J1dHRvbkNvbXBvbmVudCwgTW9kYWxDb21wb25lbnQsIEJhY2tkcm9wQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtOZ3hGZWVkYmFja1NlcnZpY2UsIE9yY2hlc3RyYXRvclNlcnZpY2UsIENvbXBvbmVudExvYWRlclNlcnZpY2UsIE1vZGFsU2VydmljZSwgU2VsZWN0b3JzU2VydmljZSwgRXZlbnRzU2VydmljZV0sXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gICAgZXhwb3J0czogW11cbn0pXG5leHBvcnQgY2xhc3MgTmd4RmVlZGJhY2tNb2R1bGUge31cbiJdfQ==