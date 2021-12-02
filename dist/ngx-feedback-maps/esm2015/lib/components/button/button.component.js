import { Component, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class ButtonComponent {
    constructor() {
        this.click = new EventEmitter();
    }
    ngOnInit() { }
    onClick() {
        this.click.emit();
    }
}
ButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: ButtonComponent, selector: "ngx-feedback-btn", outputs: { click: "click" }, ngImport: i0, template: "<button class=\"ngx-feedback-btn__container\" (click)=\"onClick()\"><ng-content></ng-content></button>\n", styles: [".ngx-feedback-btn__container{text-transform:uppercase;border:2px solid transparent;border-radius:3px;outline:none;padding:6px 12px;font-size:12px;font-weight:bold;color:#fff;background-color:#3b5560;cursor:pointer}.ngx-feedback-btn__container:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-feedback-btn',
                    templateUrl: './button.component.html',
                    styleUrls: ['./button.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { click: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPeEUsTUFBTSxPQUFPLGVBQWU7SUFJeEI7UUFGQSxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFcEMsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQztJQUViLE9BQU87UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OzZHQVZRLGVBQWU7aUdBQWYsZUFBZSxxRkNQNUIsMEdBQ0E7NEZETWEsZUFBZTtrQkFMM0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixXQUFXLEVBQUUseUJBQXlCO29CQUN0QyxTQUFTLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDekM7MEVBR0csS0FBSztzQkFESixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWZlZWRiYWNrLWJ0bicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2J1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAT3V0cHV0KClcbiAgICBjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIG5nT25Jbml0KCkge31cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xpY2suZW1pdCgpO1xuICAgIH1cbn1cbiIsIjxidXR0b24gY2xhc3M9XCJuZ3gtZmVlZGJhY2stYnRuX19jb250YWluZXJcIiAoY2xpY2spPVwib25DbGljaygpXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvYnV0dG9uPlxuIl19