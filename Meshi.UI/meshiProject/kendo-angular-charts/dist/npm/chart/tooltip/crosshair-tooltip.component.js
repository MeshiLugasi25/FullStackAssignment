/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var base_tooltip_1 = require("./base-tooltip");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var kendo_angular_l10n_1 = require("@progress/kendo-angular-l10n");
var body_factory_1 = require("./body-factory");
var ɵ0 = body_factory_1.bodyFactory;
exports.ɵ0 = ɵ0;
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
        core_1.ViewChild('content', { static: true }),
        tslib_1.__metadata("design:type", core_1.TemplateRef)
    ], CrosshairTooltipComponent.prototype, "templateRef", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], CrosshairTooltipComponent.prototype, "key", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], CrosshairTooltipComponent.prototype, "popupSettings", void 0);
    CrosshairTooltipComponent = tslib_1.__decorate([
        core_1.Component({
            providers: [kendo_angular_popup_1.PopupService, {
                    provide: kendo_angular_popup_1.POPUP_CONTAINER,
                    useFactory: ɵ0
                }],
            selector: 'kendo-chart-crosshair-tooltip',
            template: "\n        <ng-template #content>\n            <div class=\"k-chart-tooltip k-chart-crosshair-tooltip\" [ngStyle]=\"style\">\n                {{ value }}\n            </div>\n        </ng-template>\n    "
        }),
        tslib_1.__metadata("design:paramtypes", [kendo_angular_popup_1.PopupService, kendo_angular_l10n_1.LocalizationService])
    ], CrosshairTooltipComponent);
    return CrosshairTooltipComponent;
}(base_tooltip_1.BaseTooltip));
exports.CrosshairTooltipComponent = CrosshairTooltipComponent;
