/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/* tslint:disable:align no-empty */
const POSITION_MODE = 'absolute';
const COLLISION = { horizontal: "fit", vertical: "fit" };
/**
 * @hidden
 */
export class BaseTooltip {
    constructor(popupService, localizationService) {
        this.popupService = popupService;
        this.localizationService = localizationService;
        this.style = {};
        this.popupRef = null;
    }
    get active() {
        return this.popupRef !== null;
    }
    show(e) {
        const align = e.anchor.align;
        const offset = this.position(e.anchor.point);
        this.style = e.style;
        if (!this.popupRef) {
            this.popupRef = this.popupService.open(Object.assign({
                offset: offset,
                popupAlign: align,
                animate: this.animate,
                content: this.templateRef,
                collision: COLLISION,
                positionMode: POSITION_MODE
            }, this.popupSettings));
            if (this.localizationService.rtl) {
                this.popupRef.popupElement.setAttribute('dir', 'rtl');
            }
            this.onInit();
        }
        else {
            const popup = this.popupRef.popup.instance;
            popup.offset = offset;
            popup.popupAlign = align;
        }
    }
    hide() {
        if (this.popupRef) {
            this.popupRef.close();
            this.popupRef = null;
        }
    }
    onInit() {
    }
    ngOnDestroy() {
        this.hide();
    }
    position(offset) {
        if (!this.popupSettings || !this.popupSettings.appendTo) {
            return offset;
        }
        const appendTo = this.popupSettings.appendTo.element.nativeElement;
        console.log('appendTo', appendTo);
        const bbox = appendTo.getBoundingClientRect();
        const { scrollLeft, scrollTop } = this.scrollOffset(appendTo);
        return {
            left: offset.left - bbox.left - scrollLeft,
            top: offset.top - bbox.top - scrollTop
        };
    }
    scrollOffset(element) {
        if (!element) {
            return null;
        }
        let scrollLeft = element.scrollLeft;
        let scrollTop = element.scrollTop;
        let parent = element.parentElement;
        while (parent) {
            scrollLeft += parent.scrollLeft;
            scrollTop += parent.scrollTop;
            parent = parent.parentElement;
        }
        return { scrollLeft, scrollTop };
    }
}
