import { Component, Output, EventEmitter } from '@angular/core';
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
StarVoteComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-feedback-star-vote',
                template: "<div class=\"ngx-feedback-star-vote__container\">\n    <div class=\"ngx-feedback-star-vote__star\" *ngFor=\"let s of stars; index as i\">\n        <ngx-feedback-star\n            (click)=\"onClick(i)\"\n            (mouseenter)=\"onMouseEnter(i)\"\n            (mouseleave)=\"onMouseLeave(i)\"\n            [type]=\"s.type\"\n        ></ngx-feedback-star>\n    </div>\n</div>\n",
                styles: [".ngx-feedback-star-vote__container{display:flex;flex-direction:row;justify-content:center}"]
            },] }
];
StarVoteComponent.ctorParameters = () => [];
StarVoteComponent.propDecorators = {
    voted: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Rhci12b3RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mZWVkYmFjay1tYXBzL3NyYy9saWIvY29tcG9uZW50cy9zdGFyLXZvdGUvc3Rhci12b3RlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPeEUsTUFBTSxPQUFPLGlCQUFpQjtJQVkxQjtRQVhBLFVBQUssR0FBVTtZQUNYLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQzNCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQzNCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQzNCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQzNCLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1NBQzlCLENBQUM7UUFHRixVQUFLLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7SUFFMUMsQ0FBQztJQUVoQixRQUFRLEtBQUksQ0FBQztJQUViLE9BQU8sQ0FBQyxLQUFhO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxJQUFJLEtBQUssRUFBRTtnQkFDWixDQUFDLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQzthQUNuQjtpQkFBTTtnQkFDSCxDQUFDLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQzthQUNwQjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QixJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7Z0JBQ2pDLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2FBQ25CO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDbkIsQ0FBQyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7YUFDcEI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7OztZQTlDSixTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMscVlBQXlDOzthQUU1Qzs7OztvQkFVSSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWZlZWRiYWNrLXN0YXItdm90ZScsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N0YXItdm90ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc3Rhci12b3RlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhclZvdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHN0YXJzOiBhbnlbXSA9IFtcbiAgICAgICAgeyB0eXBlOiAnZW1wdHknLCB2YWx1ZTogMSB9LFxuICAgICAgICB7IHR5cGU6ICdlbXB0eScsIHZhbHVlOiAyIH0sXG4gICAgICAgIHsgdHlwZTogJ2VtcHR5JywgdmFsdWU6IDMgfSxcbiAgICAgICAgeyB0eXBlOiAnZW1wdHknLCB2YWx1ZTogNCB9LFxuICAgICAgICB7IHR5cGU6ICdlbXB0eScsIHZhbHVlOiA1IH1cbiAgICBdO1xuXG4gICAgQE91dHB1dCgpXG4gICAgdm90ZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHt9XG5cbiAgICBvbkNsaWNrKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGFycy5mb3JFYWNoKChzLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaSA8PSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHMudHlwZSA9ICdmdWxsJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcy50eXBlID0gJ2VtcHR5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudm90ZWQuZW1pdChpbmRleCArIDEpO1xuICAgIH1cblxuICAgIG9uTW91c2VFbnRlcihpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnMuZm9yRWFjaCgocywgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGkgPD0gaW5kZXggJiYgcy50eXBlICE9PSAnZnVsbCcpIHtcbiAgICAgICAgICAgICAgICBzLnR5cGUgPSAndGVtcCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uTW91c2VMZWF2ZShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RhcnMuZm9yRWFjaCgocywgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKHMudHlwZSA9PT0gJ3RlbXAnKSB7XG4gICAgICAgICAgICAgICAgcy50eXBlID0gJ2VtcHR5JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19