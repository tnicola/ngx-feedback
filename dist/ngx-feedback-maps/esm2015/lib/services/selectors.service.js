import { Injectable } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import html2canvas from 'html2canvas';
import * as i0 from "@angular/core";
export class SelectorsService {
    constructor(rendererFactory) {
        this.rendererFactory = rendererFactory;
        this.preview = new Subject();
        this.subs = [];
        this.renderer = this.rendererFactory.createRenderer(null, null);
    }
    pageScreenshot() {
        this.screenshot(document.body);
    }
    elementsHighlight() {
        let element;
        const elements = [];
        this.source = fromEvent(document, 'mousemove').subscribe((ev) => {
            if (element) {
                this.renderer.removeClass(element, 'ngx-feedback__highlight');
            }
            element = document.elementFromPoint(ev.x, ev.y);
            if (elements.findIndex(el => el === element) === -1) {
                elements.push(element);
                this.subs.push(fromEvent(element, 'click').subscribe((evt) => {
                    evt.stopPropagation();
                    this.screenshot(element);
                }));
            }
            this.renderer.addClass(element, 'ngx-feedback__highlight');
        });
    }
    screenshot(element) {
        let image;
        html2canvas(element).then(canvas => {
            image = canvas.toDataURL();
            this.preview.next(image);
        });
        this.renderer.removeClass(element, 'ngx-feedback__highlight');
        this.clean();
    }
    clean() {
        if (this.source) {
            this.source.unsubscribe();
        }
        this.subs.forEach(sub => sub.unsubscribe());
    }
}
SelectorsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SelectorsService, deps: [{ token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable });
SelectorsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SelectorsService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: SelectorsService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i0.RendererFactory2 }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0b3JzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmVlZGJhY2stbWFwcy9zcmMvbGliL3NlcnZpY2VzL3NlbGVjdG9ycy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxTQUFTLEVBQWdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLFdBQVcsTUFBTSxhQUFhLENBQUM7O0FBR3RDLE1BQU0sT0FBTyxnQkFBZ0I7SUFRekIsWUFBNkIsZUFBaUM7UUFBakMsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBUDlELFlBQU8sR0FBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN0QyxTQUFJLEdBQW1CLEVBQUUsQ0FBQztRQU90QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDRCxpQkFBaUI7UUFDYixJQUFJLE9BQXVCLENBQUM7UUFDNUIsTUFBTSxRQUFRLEdBQXVCLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7WUFDNUQsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLHlCQUF5QixDQUFDLENBQUM7YUFDakU7WUFDRCxPQUFPLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFFLEVBQWlCLENBQUMsQ0FBQyxFQUFHLEVBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEYsSUFBSSxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDVixTQUFTLENBQUUsT0FBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO29CQUN4RCxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxDQUNMLENBQUM7YUFDTDtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFVBQVUsQ0FBQyxPQUFZO1FBQ25CLElBQUksS0FBSyxDQUFDO1FBQ1YsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQixLQUFLLEdBQUksTUFBNEIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBRTlELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDN0I7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7OzhHQXBEUSxnQkFBZ0I7a0hBQWhCLGdCQUFnQixjQURILE1BQU07NEZBQ25CLGdCQUFnQjtrQkFENUIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgaHRtbDJjYW52YXMgZnJvbSAnaHRtbDJjYW52YXMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yc1NlcnZpY2Uge1xuICAgIHByZXZpZXc6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0KCk7XG4gICAgc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIHNvdXJjZTogU3Vic2NyaXB0aW9uO1xuXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IHRoaXMucmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICAgIH1cblxuICAgIHBhZ2VTY3JlZW5zaG90KCkge1xuICAgICAgICB0aGlzLnNjcmVlbnNob3QoZG9jdW1lbnQuYm9keSk7XG4gICAgfVxuICAgIGVsZW1lbnRzSGlnaGxpZ2h0KCkge1xuICAgICAgICBsZXQgZWxlbWVudDogRWxlbWVudCB8IG51bGw7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzOiAoRWxlbWVudCB8IG51bGwpW10gPSBbXTtcbiAgICAgICAgdGhpcy5zb3VyY2UgPSBmcm9tRXZlbnQoZG9jdW1lbnQsICdtb3VzZW1vdmUnKS5zdWJzY3JpYmUoKGV2KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWxlbWVudCwgJ25neC1mZWVkYmFja19faGlnaGxpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludCgoZXYgYXMgTW91c2VFdmVudCkueCwgKGV2IGFzIE1vdXNlRXZlbnQpLnkpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnRzLmZpbmRJbmRleChlbCA9PiBlbCA9PT0gZWxlbWVudCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgZnJvbUV2ZW50KChlbGVtZW50IGFzIGFueSksICdjbGljaycpLnN1YnNjcmliZSgoZXZ0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2NyZWVuc2hvdChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50LCAnbmd4LWZlZWRiYWNrX19oaWdobGlnaHQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2NyZWVuc2hvdChlbGVtZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGltYWdlO1xuICAgICAgICBodG1sMmNhbnZhcyhlbGVtZW50KS50aGVuKGNhbnZhcyA9PiB7XG4gICAgICAgICAgICBpbWFnZSA9IChjYW52YXMgYXMgSFRNTENhbnZhc0VsZW1lbnQpLnRvRGF0YVVSTCgpO1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3Lm5leHQoaW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbGVtZW50LCAnbmd4LWZlZWRiYWNrX19oaWdobGlnaHQnKTtcblxuICAgICAgICB0aGlzLmNsZWFuKCk7XG4gICAgfVxuXG4gICAgY2xlYW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnNvdXJjZSkge1xuICAgICAgICAgICAgdGhpcy5zb3VyY2UudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN1YnMuZm9yRWFjaChzdWIgPT4gc3ViLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==