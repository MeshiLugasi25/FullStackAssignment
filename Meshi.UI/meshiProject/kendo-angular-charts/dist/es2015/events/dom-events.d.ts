/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/**
 * @hidden
 */
export declare class DomEvents {
    private hammerInstance;
    private eventHandlers;
    private previous;
    constructor(hammerInstance: any, events: any);
    tap(e: any): void;
    press(e: any): void;
    panstart(e: any): void;
    panmove(e: any): void;
    panend(e: any): void;
    pinchstart(e: any): void;
    pinchmove(e: any): void;
    pinchend(e: any): void;
    trigger(name: string, e: any): any;
    bind(events?: any): void;
    unbind(): void;
    destroy(): void;
    toggleDrag(enable: boolean): void;
    toggleZoom(enable: boolean): void;
    private toggle;
}
