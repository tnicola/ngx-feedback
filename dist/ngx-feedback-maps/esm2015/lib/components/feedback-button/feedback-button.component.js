import { Component, ViewEncapsulation } from '@angular/core';
import { EventsService } from '../../services/events.service';
export class FeedbackButtonComponent {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    ngOnInit() { }
    onClick() {
        this.eventsService.onFeedbackButtonClick();
    }
}
FeedbackButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-feedback-main-btn',
                template: "<div role=\"complementary\">\n<button (click)=\"onClick()\" class=\"feedback-button__container\">Submit Feedback</button>\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: [".feedback-button__container{position:fixed;right:-65px;top:calc(50% - 37.5px);cursor:pointer;transform:rotate(-90deg);border:none;border-radius:5px 5px 0 0;background-color:#3b5560;color:#fff;font-size:14px;padding:5px 10px;font-weight:700;font-family:Verdana;outline:none}.ngx-feedback__highlight{outline:4px solid #ffc058;pointer-events:none;cursor:default!important}"]
            },] }
];
FeedbackButtonComponent.ctorParameters = () => [
    { type: EventsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvY29tcG9uZW50cy9mZWVkYmFjay1idXR0b24vZmVlZGJhY2stYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVE5RCxNQUFNLE9BQU8sdUJBQXVCO0lBQ2hDLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQztJQUVwRCxRQUFRLEtBQUksQ0FBQztJQUNiLE9BQU87UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0MsQ0FBQzs7O1lBWkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDZJQUErQztnQkFFL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7O2FBQ3hDOzs7WUFQUSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnRzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1mZWVkYmFjay1tYWluLWJ0bicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ZlZWRiYWNrLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZmVlZGJhY2stYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGZWVkYmFja0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudHNTZXJ2aWNlOiBFdmVudHNTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7fVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzU2VydmljZS5vbkZlZWRiYWNrQnV0dG9uQ2xpY2soKTtcbiAgICB9XG59XG4iXX0=