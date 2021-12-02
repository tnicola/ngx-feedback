import { ComponentLoaderService } from './component-loader.service';
import * as i0 from "@angular/core";
export declare class ModalService {
    private readonly componentLoader;
    private modalRef;
    private backdropRef;
    constructor(componentLoader: ComponentLoaderService<any>);
    openWithPreview(preview: any): void;
    draw(): void;
    remove(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ModalService>;
}
