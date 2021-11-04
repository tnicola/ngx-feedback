import { Component, Input, Output, EventEmitter } from '@angular/core';
export class StarComponent {
    constructor() {
        this.type = 'empty';
        this.click = new EventEmitter();
    }
    ngOnInit() { }
    onClick() {
        this.click.emit();
    }
}
StarComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-feedback-star',
                template: "<div class=\"ngx-feedback-star__container\" (click)=\"onClick()\">\n    <div *ngIf=\"type === 'full' || type === 'temp'; else empty\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#ffc058\">\n            <path\n                d=\"M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z\"\n            />\n        </svg>\n    </div>\n    <ng-template #empty>\n        <div>\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"40\" height=\"40\" viewBox=\"0 0 24 24\" fill=\"#ffc058\">\n                <path\n                    d=\"M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z\"\n                />\n            </svg>\n        </div>\n    </ng-template>\n</div>\n",
                styles: [".ngx-feedback-star__container{cursor:pointer;padding:5px}"]
            },] }
];
StarComponent.ctorParameters = () => [];
StarComponent.propDecorators = {
    type: [{ type: Input }],
    click: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmVlZGJhY2stbWFwcy9zcmMvbGliL2NvbXBvbmVudHMvc3Rhci9zdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9FLE1BQU0sT0FBTyxhQUFhO0lBTXRCO1FBSkEsU0FBSSxHQUE4QixPQUFPLENBQUM7UUFHMUMsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQy9CLENBQUM7SUFFaEIsUUFBUSxLQUFJLENBQUM7SUFFYixPQUFPO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7WUFqQkosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLHEvQkFBb0M7O2FBRXZDOzs7O21CQUVJLEtBQUs7b0JBR0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtZmVlZGJhY2stc3RhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N0YXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3N0YXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKVxuICAgIHR5cGU6ICdmdWxsJyB8ICdlbXB0eScgfCAndGVtcCcgPSAnZW1wdHknO1xuXG4gICAgQE91dHB1dCgpXG4gICAgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIG5nT25Jbml0KCkge31cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xpY2suZW1pdCgpO1xuICAgIH1cbn1cbiJdfQ==