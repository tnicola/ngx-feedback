import { Component, EventEmitter, Output } from '@angular/core';
export class BackdropComponent {
    constructor() {
        this.click = new EventEmitter();
    }
    ngOnInit() { }
    onClick() {
        this.click.emit();
    }
}
BackdropComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-feedback-backdrop',
                template: "<div class=\"ngx-feedback-backdrop__container\"></div>",
                styles: [".ngx-feedback-backdrop__container{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;background-color:#3b5560;opacity:.7}"]
            },] }
];
BackdropComponent.ctorParameters = () => [];
BackdropComponent.propDecorators = {
    click: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2Ryb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZlZWRiYWNrLW1hcHMvc3JjL2xpYi9jb21wb25lbnRzL2JhY2tkcm9wL2JhY2tkcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPeEUsTUFBTSxPQUFPLGlCQUFpQjtJQUkxQjtRQUZBLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUVwQyxDQUFDO0lBRWhCLFFBQVEsS0FBSSxDQUFDO0lBRWIsT0FBTztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBZkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLGtFQUF3Qzs7YUFFM0M7Ozs7b0JBRUksTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1mZWVkYmFjay1iYWNrZHJvcCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2JhY2tkcm9wLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9iYWNrZHJvcC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEJhY2tkcm9wQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBAT3V0cHV0KClcbiAgICBjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIG5nT25Jbml0KCkge31cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xpY2suZW1pdCgpO1xuICAgIH1cbn1cbiJdfQ==