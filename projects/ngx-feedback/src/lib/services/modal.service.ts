import { Injectable, ComponentRef } from '@angular/core';
import { ComponentLoaderService } from './component-loader.service';
import { ModalComponent } from '../components/modal/modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
    private ref: ComponentRef<ModalComponent>;

    constructor(private readonly componentLoader: ComponentLoaderService<ModalComponent>) {}

    draw() {
        this.ref = this.componentLoader.load(ModalComponent);
    }

    remove() {
        this.ref.destroy();
    }
}
