import { Component, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../star/star.component";
import * as i2 from "@angular/common";
export class StarVoteComponent {
    constructor() {
        this.stars = [
            { type: 'empty', value: 1 },
            { type: 'empty', value: 2 },
            { type: 'empty', value: 3 },
            { type: 'empty', value: 4 },
            { type: 'empty', value: 5 }
        ];
        this.voted = new EventEmitter();
    }
    ngOnInit() { }
    onClick(index) {
        this.stars.forEach((s, i) => {
            if (i <= index) {
                s.type = 'full';
            }
            else {
                s.type = 'empty';
            }
        });
        this.voted.emit(index + 1);
    }
    onMouseEnter(index) {
        this.stars.forEach((s, i) => {
            if (i <= index && s.type !== 'full') {
                s.type = 'temp';
            }
        });
    }
    onMouseLeave(index) {
        this.stars.forEach((s, i) => {
            if (s.type === 'temp') {
                s.type = 'empty';
            }
        });
    }
}
StarVoteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: StarVoteComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StarVoteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: StarVoteComponent, selector: "ngx-feedback-star-vote", outputs: { voted: "voted" }, ngImport: i0, template: "<div class=\"ngx-feedback-star-vote__container\">\n    <div class=\"ngx-feedback-star-vote__star\" *ngFor=\"let s of stars; index as i\">\n        <ngx-feedback-star\n            (click)=\"onClick(i)\"\n            (mouseenter)=\"onMouseEnter(i)\"\n            (mouseleave)=\"onMouseLeave(i)\"\n            [type]=\"s.type\"\n        ></ngx-feedback-star>\n    </div>\n</div>\n", styles: [".ngx-feedback-star-vote__container{display:flex;flex-direction:row;justify-content:center}\n"], components: [{ type: i1.StarComponent, selector: "ngx-feedback-star", inputs: ["type"], outputs: ["click"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: StarVoteComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-feedback-star-vote',
                    templateUrl: './star-vote.component.html',
                    styleUrls: ['./star-vote.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { voted: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci12b3RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvY29tcG9uZW50cy9zdGFyLXZvdGUvc3Rhci12b3RlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvY29tcG9uZW50cy9zdGFyLXZvdGUvc3Rhci12b3RlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU94RSxNQUFNLE9BQU8saUJBQWlCO0lBWTFCO1FBWEEsVUFBSyxHQUFVO1lBQ1gsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDM0IsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7U0FDOUIsQ0FBQztRQUdGLFVBQUssR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUUxQyxDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDO0lBRWIsT0FBTyxDQUFDLEtBQWE7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLElBQUksS0FBSyxFQUFFO2dCQUNaLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2FBQ25CO2lCQUFNO2dCQUNILENBQUMsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO2FBQ3BCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDakMsQ0FBQyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7YUFDbkI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFO2dCQUNuQixDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQzthQUNwQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7K0dBekNRLGlCQUFpQjttR0FBakIsaUJBQWlCLDJGQ1A5QiwyWEFVQTs0RkRIYSxpQkFBaUI7a0JBTDdCLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsV0FBVyxFQUFFLDRCQUE0QjtvQkFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7aUJBQzVDOzBFQVdHLEtBQUs7c0JBREosTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1mZWVkYmFjay1zdGFyLXZvdGUnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zdGFyLXZvdGUuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3N0YXItdm90ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFN0YXJWb3RlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBzdGFyczogYW55W10gPSBbXG4gICAgICAgIHsgdHlwZTogJ2VtcHR5JywgdmFsdWU6IDEgfSxcbiAgICAgICAgeyB0eXBlOiAnZW1wdHknLCB2YWx1ZTogMiB9LFxuICAgICAgICB7IHR5cGU6ICdlbXB0eScsIHZhbHVlOiAzIH0sXG4gICAgICAgIHsgdHlwZTogJ2VtcHR5JywgdmFsdWU6IDQgfSxcbiAgICAgICAgeyB0eXBlOiAnZW1wdHknLCB2YWx1ZTogNSB9XG4gICAgXTtcblxuICAgIEBPdXRwdXQoKVxuICAgIHZvdGVkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7fVxuXG4gICAgb25DbGljayhpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnMuZm9yRWFjaCgocywgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPD0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzLnR5cGUgPSAnZnVsbCc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHMudHlwZSA9ICdlbXB0eSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZvdGVkLmVtaXQoaW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICBvbk1vdXNlRW50ZXIoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXJzLmZvckVhY2goKHMsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChpIDw9IGluZGV4ICYmIHMudHlwZSAhPT0gJ2Z1bGwnKSB7XG4gICAgICAgICAgICAgICAgcy50eXBlID0gJ3RlbXAnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk1vdXNlTGVhdmUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLnN0YXJzLmZvckVhY2goKHMsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChzLnR5cGUgPT09ICd0ZW1wJykge1xuICAgICAgICAgICAgICAgIHMudHlwZSA9ICdlbXB0eSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJuZ3gtZmVlZGJhY2stc3Rhci12b3RlX19jb250YWluZXJcIj5cbiAgICA8ZGl2IGNsYXNzPVwibmd4LWZlZWRiYWNrLXN0YXItdm90ZV9fc3RhclwiICpuZ0Zvcj1cImxldCBzIG9mIHN0YXJzOyBpbmRleCBhcyBpXCI+XG4gICAgICAgIDxuZ3gtZmVlZGJhY2stc3RhclxuICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2soaSlcIlxuICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKGkpXCJcbiAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZShpKVwiXG4gICAgICAgICAgICBbdHlwZV09XCJzLnR5cGVcIlxuICAgICAgICA+PC9uZ3gtZmVlZGJhY2stc3Rhcj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuIl19