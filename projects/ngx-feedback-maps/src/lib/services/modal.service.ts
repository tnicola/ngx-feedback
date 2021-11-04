import { Injectable, ComponentRef } from '@angular/core';
import { ComponentLoaderService } from './component-loader.service';
import { ModalComponent } from '../components/modal/modal.component';
import { BackdropComponent } from '../components/backdrop/backdrop.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private modalRef: ComponentRef<ModalComponent>;
    private backdropRef: ComponentRef<BackdropComponent>;

    constructor(private readonly componentLoader: ComponentLoaderService<any>) {}

    openWithPreview(preview: any) {
        this.draw();
        this.modalRef.instance.setPreview(preview);
    }
    draw() {
        this.backdropRef = this.componentLoader.load(BackdropComponent);
        this.modalRef = this.componentLoader.load(ModalComponent);
    }

    remove() {
        this.modalRef.destroy();
        this.backdropRef.destroy();
    }
}
