import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class BackdropComponent {
    constructor() {
        this.click = new EventEmitter();
    }
    ngOnInit() { }
    onClick() {
        this.click.emit();
    }
}
BackdropComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: BackdropComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
BackdropComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.13", type: BackdropComponent, selector: "ngx-feedback-backdrop", outputs: { click: "click" }, ngImport: i0, template: "<div class=\"ngx-feedback-backdrop__container\"></div>", styles: [".ngx-feedback-backdrop__container{position:fixed;top:0px;left:0px;width:100%;height:100%;z-index:1000;background-color:#3b5560;opacity:.7}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.13", ngImport: i0, type: BackdropComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'ngx-feedback-backdrop',
                    templateUrl: './backdrop.component.html',
                    styleUrls: ['./backdrop.component.scss']
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { click: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2Ryb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZlZWRiYWNrLW1hcHMvc3JjL2xpYi9jb21wb25lbnRzL2JhY2tkcm9wL2JhY2tkcm9wLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvY29tcG9uZW50cy9iYWNrZHJvcC9iYWNrZHJvcC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBT3hFLE1BQU0sT0FBTyxpQkFBaUI7SUFJMUI7UUFGQSxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFcEMsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQztJQUViLE9BQU87UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OytHQVZRLGlCQUFpQjttR0FBakIsaUJBQWlCLDBGQ1A5Qix3REFBb0Q7NEZET3ZDLGlCQUFpQjtrQkFMN0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxXQUFXLEVBQUUsMkJBQTJCO29CQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDM0M7MEVBR0csS0FBSztzQkFESixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWZlZWRiYWNrLWJhY2tkcm9wJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYmFja2Ryb3AuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2JhY2tkcm9wLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQmFja2Ryb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBPdXRwdXQoKVxuICAgIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7fVxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5jbGljay5lbWl0KCk7XG4gICAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIm5neC1mZWVkYmFjay1iYWNrZHJvcF9fY29udGFpbmVyXCI+PC9kaXY+Il19