import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./modal.service";
import * as i2 from "./selectors.service";
import * as i3 from "./events.service";
export class OrchestratorService {
    constructor(modalService, selectorsService, eventsService) {
        this.modalService = modalService;
        this.selectorsService = selectorsService;
        this.eventsService = eventsService;
        this.subscriptions = [];
        this.onSend = new Subject();
    }
    ngOnInit() {
        this.subscriptions.push(this.onFeedbackButtonClick(), this.onSpecificFeedbackClick(), this.onGenericFeedbackClick(), this.onElementSelected(), this.onCloseClick(), this.onSendClick());
    }
    onElementSelected() {
        return this.selectorsService.preview.subscribe((prev) => {
            this.modalService.openWithPreview(prev);
        });
    }
    onFeedbackButtonClick() {
        return this.eventsService.feedbackClickObservable.subscribe(() => {
            this.modalService.draw();
        });
    }
    onSpecificFeedbackClick() {
        return this.eventsService.specificFeedbackClickObservable.subscribe(() => {
            this.modalService.remove();
            this.selectorsService.elementsHighlight();
        });
    }
    onGenericFeedbackClick() {
        return this.eventsService.genericFeedbackClickObservable.subscribe(() => {
            this.modalService.remove();
            setTimeout(() => {
                this.selectorsService.pageScreenshot();
            }, 500);
        });
    }
    onCloseClick() {
        return this.eventsService.closeClickClickObservable.subscribe(() => {
            this.modalService.remove();
        });
    }
    onSendClick() {
        return this.eventsService.onSendClickObservable.subscribe((data) => {
            this.onSend.next(data);
        });
    }
    ngOnDestroy() {
        this.subscriptions.forEach((sub) => {
            sub.unsubscribe();
        });
    }
}
OrchestratorService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: OrchestratorService, deps: [{ token: i1.ModalService }, { token: i2.SelectorsService }, { token: i3.EventsService }], target: i0.ɵɵFactoryTarget.Injectable });
OrchestratorService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: OrchestratorService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: OrchestratorService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.ModalService }, { type: i2.SelectorsService }, { type: i3.EventsService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JjaGVzdHJhdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmVlZGJhY2stbWFwcy9zcmMvbGliL3NlcnZpY2VzL29yY2hlc3RyYXRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBSTlELE9BQU8sRUFBZ0IsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7OztBQUk3QyxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLFlBQ21CLFlBQTBCLEVBQzFCLGdCQUFrQyxFQUNsQyxhQUE0QjtRQUY1QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBTnZDLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztRQUUzQyxXQUFNLEdBQTBCLElBQUksT0FBTyxFQUFnQixDQUFDO0lBS3pELENBQUM7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ3JCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxFQUM1QixJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFDOUIsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQzdCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLEVBQ25CLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FDbkIsQ0FBQztJQUNKLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3RELElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHFCQUFxQjtRQUMzQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUMvRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHVCQUF1QjtRQUM3QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsK0JBQStCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN2RSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLHNCQUFzQjtRQUM1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsOEJBQThCLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUN0RSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNCLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3pDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNWLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFlBQVk7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDakUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxXQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFrQixFQUFFLEVBQUU7WUFDL0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDakMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7aUhBaEVVLG1CQUFtQjtxSEFBbkIsbUJBQW1CLGNBRE4sTUFBTTs0RkFDbkIsbUJBQW1CO2tCQUQvQixVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2VsZWN0b3JzU2VydmljZSB9IGZyb20gJy4vc2VsZWN0b3JzLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXZlbnRzU2VydmljZSB9IGZyb20gJy4vZXZlbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGZWVkYmFja0RhdGEgfSBmcm9tICcuLi9tb2RlbHMvZmVlZGJhY2stZGF0YS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT3JjaGVzdHJhdG9yU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gIG9uU2VuZDogU3ViamVjdDxGZWVkYmFja0RhdGE+ID0gbmV3IFN1YmplY3Q8RmVlZGJhY2tEYXRhPigpO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgc2VsZWN0b3JzU2VydmljZTogU2VsZWN0b3JzU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50c1NlcnZpY2U6IEV2ZW50c1NlcnZpY2UsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMub25GZWVkYmFja0J1dHRvbkNsaWNrKCksXG4gICAgICB0aGlzLm9uU3BlY2lmaWNGZWVkYmFja0NsaWNrKCksXG4gICAgICB0aGlzLm9uR2VuZXJpY0ZlZWRiYWNrQ2xpY2soKSxcbiAgICAgIHRoaXMub25FbGVtZW50U2VsZWN0ZWQoKSxcbiAgICAgIHRoaXMub25DbG9zZUNsaWNrKCksXG4gICAgICB0aGlzLm9uU2VuZENsaWNrKCksXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgb25FbGVtZW50U2VsZWN0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0b3JzU2VydmljZS5wcmV2aWV3LnN1YnNjcmliZSgocHJldikgPT4ge1xuICAgICAgdGhpcy5tb2RhbFNlcnZpY2Uub3BlbldpdGhQcmV2aWV3KHByZXYpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkZlZWRiYWNrQnV0dG9uQ2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRzU2VydmljZS5mZWVkYmFja0NsaWNrT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5tb2RhbFNlcnZpY2UuZHJhdygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvblNwZWNpZmljRmVlZGJhY2tDbGljaygpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudHNTZXJ2aWNlLnNwZWNpZmljRmVlZGJhY2tDbGlja09ic2VydmFibGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnJlbW92ZSgpO1xuICAgICAgdGhpcy5zZWxlY3RvcnNTZXJ2aWNlLmVsZW1lbnRzSGlnaGxpZ2h0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uR2VuZXJpY0ZlZWRiYWNrQ2xpY2soKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRzU2VydmljZS5nZW5lcmljRmVlZGJhY2tDbGlja09ic2VydmFibGUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubW9kYWxTZXJ2aWNlLnJlbW92ZSgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VsZWN0b3JzU2VydmljZS5wYWdlU2NyZWVuc2hvdCgpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25DbG9zZUNsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50c1NlcnZpY2UuY2xvc2VDbGlja0NsaWNrT2JzZXJ2YWJsZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5tb2RhbFNlcnZpY2UucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uU2VuZENsaWNrKCkge1xuICAgIHJldHVybiB0aGlzLmV2ZW50c1NlcnZpY2Uub25TZW5kQ2xpY2tPYnNlcnZhYmxlLnN1YnNjcmliZSgoZGF0YTogRmVlZGJhY2tEYXRhKSA9PiB7XG4gICAgICB0aGlzLm9uU2VuZC5uZXh0KGRhdGEpO1xuICAgIH0pO1xuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKChzdWIpID0+IHtcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=