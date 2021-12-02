import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class EventsService {
    constructor() {
        this.feedbackClick = new Subject();
        this.feedbackClickObservable = this.feedbackClick.asObservable();
        this.specificFeedbackClick = new Subject();
        this.specificFeedbackClickObservable = this.specificFeedbackClick.asObservable();
        this.genericFeedbackClick = new Subject();
        this.genericFeedbackClickObservable = this.genericFeedbackClick.asObservable();
        this.closeClick = new Subject();
        this.closeClickClickObservable = this.closeClick.asObservable();
        this.onSendClick = new Subject();
        this.onSendClickObservable = this.onSendClick.asObservable();
    }
    onSpecificFeedbackClick() {
        this.specificFeedbackClick.next();
    }
    onGenericFeedbackClik() {
        this.genericFeedbackClick.next();
    }
    onFeedbackButtonClick() {
        this.feedbackClick.next();
    }
    onCloseClicked() {
        this.closeClick.next();
    }
    onSendClicked(data) {
        this.onSendClick.next(data);
    }
}
EventsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: EventsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
EventsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: EventsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: EventsService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnRzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmVlZGJhY2stbWFwcy9zcmMvbGliL3NlcnZpY2VzL2V2ZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBYyxNQUFNLE1BQU0sQ0FBQzs7QUFJM0MsTUFBTSxPQUFPLGFBQWE7SUFDdEI7UUFFUSxrQkFBYSxHQUFrQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQzFELDRCQUF1QixHQUFvQixJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXJFLDBCQUFxQixHQUFrQixJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ2xFLG9DQUErQixHQUFvQixJQUFJLENBQUMscUJBQXFCLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFckYseUJBQW9CLEdBQWtCLElBQUksT0FBTyxFQUFPLENBQUM7UUFDakUsbUNBQThCLEdBQW9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVuRixlQUFVLEdBQWtCLElBQUksT0FBTyxFQUFPLENBQUM7UUFDdkQsOEJBQXlCLEdBQW9CLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEUsZ0JBQVcsR0FBaUIsSUFBSSxPQUFPLEVBQWdCLENBQUM7UUFDaEUsMEJBQXFCLEdBQTZCLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUM7SUFmbkUsQ0FBQztJQWlCaEIsdUJBQXVCO1FBQ25CLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBRUQscUJBQXFCO1FBQ2pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0QscUJBQXFCO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELGNBQWM7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBa0I7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7MkdBbkNRLGFBQWE7K0dBQWIsYUFBYSxjQURBLE1BQU07NEZBQ25CLGFBQWE7a0JBRHpCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmVlZGJhY2tEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2ZlZWRiYWNrLWRhdGEubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEV2ZW50c1NlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHByaXZhdGUgZmVlZGJhY2tDbGljazogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICBmZWVkYmFja0NsaWNrT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5mZWVkYmFja0NsaWNrLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgcHJpdmF0ZSBzcGVjaWZpY0ZlZWRiYWNrQ2xpY2s6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gICAgc3BlY2lmaWNGZWVkYmFja0NsaWNrT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5zcGVjaWZpY0ZlZWRiYWNrQ2xpY2suYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBwcml2YXRlIGdlbmVyaWNGZWVkYmFja0NsaWNrOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICAgIGdlbmVyaWNGZWVkYmFja0NsaWNrT2JzZXJ2YWJsZTogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5nZW5lcmljRmVlZGJhY2tDbGljay5hc09ic2VydmFibGUoKTtcblxuICAgIHByaXZhdGUgY2xvc2VDbGljazogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICBjbG9zZUNsaWNrQ2xpY2tPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmNsb3NlQ2xpY2suYXNPYnNlcnZhYmxlKCk7XG5cbiAgICBwcml2YXRlIG9uU2VuZENsaWNrOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxGZWVkYmFja0RhdGE+KCk7XG4gICAgb25TZW5kQ2xpY2tPYnNlcnZhYmxlOiBPYnNlcnZhYmxlPEZlZWRiYWNrRGF0YT4gPSB0aGlzLm9uU2VuZENsaWNrLmFzT2JzZXJ2YWJsZSgpO1xuXG4gICAgb25TcGVjaWZpY0ZlZWRiYWNrQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuc3BlY2lmaWNGZWVkYmFja0NsaWNrLm5leHQoKTtcbiAgICB9XG5cbiAgICBvbkdlbmVyaWNGZWVkYmFja0NsaWsoKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJpY0ZlZWRiYWNrQ2xpY2submV4dCgpO1xuICAgIH1cbiAgICBvbkZlZWRiYWNrQnV0dG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuZmVlZGJhY2tDbGljay5uZXh0KCk7XG4gICAgfVxuXG4gICAgb25DbG9zZUNsaWNrZWQoKSB7XG4gICAgICAgIHRoaXMuY2xvc2VDbGljay5uZXh0KCk7XG4gICAgfVxuXG4gICAgb25TZW5kQ2xpY2tlZChkYXRhOiBGZWVkYmFja0RhdGEpIHtcbiAgICAgICAgdGhpcy5vblNlbmRDbGljay5uZXh0KGRhdGEpO1xuICAgIH1cbn1cbiJdfQ==