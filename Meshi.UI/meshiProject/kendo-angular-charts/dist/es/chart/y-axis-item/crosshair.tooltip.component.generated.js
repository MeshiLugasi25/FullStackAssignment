/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
import { SettingsComponent } from '../../common/settings.component';
/**
 * @hidden
 */
var YAxisCrosshairTooltipComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(YAxisCrosshairTooltipComponentGenerated, _super);
    function YAxisCrosshairTooltipComponentGenerated(configurationService) {
        var _this = _super.call(this, 'crosshair.tooltip', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisCrosshairTooltipComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisCrosshairTooltipComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisCrosshairTooltipComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisCrosshairTooltipComponentGenerated.prototype, "font", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisCrosshairTooltipComponentGenerated.prototype, "format", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisCrosshairTooltipComponentGenerated.prototype, "padding", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], YAxisCrosshairTooltipComponentGenerated.prototype, "visible", void 0);
    return YAxisCrosshairTooltipComponentGenerated;
}(SettingsComponent));
export { YAxisCrosshairTooltipComponentGenerated };
