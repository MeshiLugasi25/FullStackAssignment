/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild, TemplateRef } from '@angular/core';
import { BaseTooltip } from './base-tooltip';
import { PopupService, POPUP_CONTAINER } from '@progress/kendo-angular-popup';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { bodyFactory } from './body-factory';
var ɵ0 = bodyFactory;
// Codelyzer 2.0.0-beta2 doesn't handle inherited members
/* tslint:disable:no-access-missing-member */
/**
 * @hidden
 */
var CrosshairTooltipComponent = /** @class */ (function (_super) {
    tslib_1.__extends(CrosshairTooltipComponent, _super);
    function CrosshairTooltipComponent(popupService, localizationService) {
        var _this = _super.call(this, popupService, localizationService) || this;
        _this.animate = false;
        return _this;
    }
    CrosshairTooltipComponent.prototype.show = function (e) {
        _super.prototype.show.call(this, e);
        this.value = e.value;
        this.popupRef.popup.changeDetectorRef.detectChanges();
    };
    tslib_1.__decorate([
        ViewChild('content', { static: true }),
        tslib_1.__metadata("design:type", TemplateRef)
    ], CrosshairTooltipComponent.prototype, "templateRef", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], CrosshairTooltipComponent.prototype, "key", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CrosshairTooltipComponent.prototype, "popupSettings", void 0);
    CrosshairTooltipComponent = tslib_1.__decorate([
        Component({
            providers: [PopupService, {
                    provide: POPUP_CONTAINER,
                    useFactory: ɵ0
                }],
            selector: 'kendo-chart-crosshair-tooltip',
            template: "\n        <ng-template #content>\n            <div class=\"k-chart-tooltip k-chart-crosshair-tooltip\" [ngStyle]=\"style\">\n                {{ value }}\n            </div>\n        </ng-template>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [PopupService, LocalizationService])
    ], CrosshairTooltipComponent);
    return CrosshairTooltipComponent;
}(BaseTooltip));
export { CrosshairTooltipComponent };
export { ɵ0 };
