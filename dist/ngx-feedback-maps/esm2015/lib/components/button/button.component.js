import { Component, Output, EventEmitter } from '@angular/core';
export class ButtonComponent {
    constructor() {
        this.click = new EventEmitter();
    }
    ngOnInit() { }
    onClick() {
        this.click.emit();
    }
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-feedback-btn',
                template: "<button class=\"ngx-feedback-btn__container\" (click)=\"onClick()\"><ng-content></ng-content></button>\n",
                styles: [".ngx-feedback-btn__container{text-transform:uppercase;border:2px solid transparent;border-radius:3px;outline:none;padding:6px 12px;font-size:12px;font-weight:700;color:#fff;background-color:#3b5560;cursor:pointer}.ngx-feedback-btn__container:hover{color:#3b5560;border:2px solid #3b5560;background-color:#fff}"]
            },] }
];
ButtonComponent.ctorParameters = () => [];
ButtonComponent.propDecorators = {
    click: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPeEUsTUFBTSxPQUFPLGVBQWU7SUFJeEI7UUFGQSxVQUFLLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFFcEMsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQztJQUViLE9BQU87UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OztZQWZKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixvSEFBc0M7O2FBRXpDOzs7O29CQUVJLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZmVlZGJhY2stYnRuJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBPdXRwdXQoKVxuICAgIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgbmdPbkluaXQoKSB7fVxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5jbGljay5lbWl0KCk7XG4gICAgfVxufVxuIl19