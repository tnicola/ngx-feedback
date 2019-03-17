import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { fromEvent, Subscription, Subject } from 'rxjs';
import html2canvas from 'html2canvas';

@Injectable()
export class SelectorsService {
  preview: Subject<any> = new Subject();
  subs: Subscription[] = [];

  source: Subscription;

  private renderer: Renderer2;

  constructor(private readonly rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  pageScreenshot() {
    this.screenshot(document.body);
  }
  elementsHighlight() {
    let element: Element;
    const elements = [];
    this.source = fromEvent(document, 'mousemove').subscribe((ev: MouseEvent) => {
      if (element) {
        this.renderer.removeClass(element, 'ngx-feedback__highlight');
      }
      element = document.elementFromPoint(ev.x, ev.y);
      if (elements.findIndex(el => el === element) === -1) {
        elements.push(element);
        console.log('Pushing element', element);
        this.subs.push(
          fromEvent(element, 'click').subscribe((evt: MouseEvent) => {
            evt.stopPropagation();
            this.screenshot(element);
            console.log('clicked', evt.target);
          })
        );
        console.log(this.subs.length, this.subs);
      }
      this.renderer.addClass(element, 'ngx-feedback__highlight');
    });
  }

  screenshot(element: any) {
    let image;
    html2canvas(element).then(canvas => {
      console.log('Canvas', canvas);
      image = (canvas as HTMLCanvasElement).toDataURL();
      this.preview.next(image);
      console.log('aaa', image);
    });
    this.renderer.removeClass(element, 'ngx-feedback__highlight');

    this.clean();
  }

  clean() {
    this.source.unsubscribe();
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
