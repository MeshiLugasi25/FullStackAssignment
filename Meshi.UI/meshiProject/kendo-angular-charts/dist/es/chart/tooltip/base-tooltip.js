/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
/* tslint:disable:align no-empty */
var POSITION_MODE = 'absolute';
var COLLISION = { horizontal: "fit", vertical: "fit" };
/**
 * @hidden
 */
var BaseTooltip = /** @class */ (function () {
    function BaseTooltip(popupService, localizationService) {
        this.popupService = popupService;
        this.localizationService = localizationService;
        this.style = {};
        this.popupRef = null;
    }
    Object.defineProperty(BaseTooltip.prototype, "active", {
        get: function () {
            return this.popupRef !== null;
        },
        enumerable: true,
        configurable: true
    });
    BaseTooltip.prototype.show = function (e) {
        var align = e.anchor.align;
        var offset = this.position(e.anchor.point);
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
            var popup = this.popupRef.popup.instance;
            popup.offset = offset;
            popup.popupAlign = align;
        }
    };
    BaseTooltip.prototype.hide = function () {
        if (this.popupRef) {
            this.popupRef.close();
            this.popupRef = null;
        }
    };
    BaseTooltip.prototype.onInit = function () {
    };
    BaseTooltip.prototype.ngOnDestroy = function () {
        this.hide();
    };
    BaseTooltip.prototype.position = function (offset) {
        if (!this.popupSettings || !this.popupSettings.appendTo) {
            return offset;
        }
        var appendTo = this.popupSettings.appendTo.element.nativeElement;
        console.log('appendTo', appendTo);
        var bbox = appendTo.getBoundingClientRect();
        var _a = this.scrollOffset(appendTo), scrollLeft = _a.scrollLeft, scrollTop = _a.scrollTop;
        return {
            left: offset.left - bbox.left - scrollLeft,
            top: offset.top - bbox.top - scrollTop
        };
    };
    BaseTooltip.prototype.scrollOffset = function (element) {
        if (!element) {
            return null;
        }
        var scrollLeft = element.scrollLeft;
        var scrollTop = element.scrollTop;
        var parent = element.parentElement;
        while (parent) {
            scrollLeft += parent.scrollLeft;
            scrollTop += parent.scrollTop;
            parent = parent.parentElement;
        }
        return { scrollLeft: scrollLeft, scrollTop: scrollTop };
    };
    return BaseTooltip;
}());
export { BaseTooltip };
