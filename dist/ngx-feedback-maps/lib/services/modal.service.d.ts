import { ComponentLoaderService } from './component-loader.service';
export declare class ModalService {
    private readonly componentLoader;
    private modalRef;
    private backdropRef;
    constructor(componentLoader: ComponentLoaderService<any>);
    openWithPreview(preview: any): void;
    draw(): void;
    remove(): void;
}
