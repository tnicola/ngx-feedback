import { Component, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../services/events.service";
export class FeedbackButtonComponent {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    ngOnInit() { }
    onClick() {
        this.eventsService.onFeedbackButtonClick();
    }
}
FeedbackButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: FeedbackButtonComponent, deps: [{ token: i1.EventsService }], target: i0.ɵɵFactoryTarget.Component });
FeedbackButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: FeedbackButtonComponent, selector: "ngx-feedback-main-btn", ngImport: i0, template: "<div role=\"complementary\">\n<button (click)=\"onClick()\" class=\"feedback-button__container\">Submit Feedback</button>\n</div>", styles: [".feedback-button__container{position:fixed;right:-65px;top:calc(50% - 37.5px);cursor:pointer;transform:rotate(-90deg);border:none;border-radius:5px 5px 0 0;background-color:#3b5560;color:#fff;font-size:14px;padding:5px 10px;font-weight:bold;font-family:Verdana;outline:none}.ngx-feedback__highlight{outline:4px solid #ffc058;pointer-events:none;cursor:default!important}\n"], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: FeedbackButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-feedback-main-btn',
                    templateUrl: './feedback-button.component.html',
                    styleUrls: ['./feedback-button.component.scss'],
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return [{ type: i1.EventsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvY29tcG9uZW50cy9mZWVkYmFjay1idXR0b24vZmVlZGJhY2stYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvY29tcG9uZW50cy9mZWVkYmFjay1idXR0b24vZmVlZGJhY2stYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVNyRSxNQUFNLE9BQU8sdUJBQXVCO0lBQ2hDLFlBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQztJQUVwRCxRQUFRLEtBQUksQ0FBQztJQUNiLE9BQU87UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDL0MsQ0FBQzs7cUhBTlEsdUJBQXVCO3lHQUF2Qix1QkFBdUIsNkRDVHBDLG1JQUVNOzRGRE9PLHVCQUF1QjtrQkFObkMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnRzLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1mZWVkYmFjay1tYWluLWJ0bicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ZlZWRiYWNrLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vZmVlZGJhY2stYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBGZWVkYmFja0J1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBldmVudHNTZXJ2aWNlOiBFdmVudHNTZXJ2aWNlKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7fVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzU2VydmljZS5vbkZlZWRiYWNrQnV0dG9uQ2xpY2soKTtcbiAgICB9XG59XG4iLCI8ZGl2IHJvbGU9XCJjb21wbGVtZW50YXJ5XCI+XG48YnV0dG9uIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cImZlZWRiYWNrLWJ1dHRvbl9fY29udGFpbmVyXCI+U3VibWl0IEZlZWRiYWNrPC9idXR0b24+XG48L2Rpdj4iXX0=