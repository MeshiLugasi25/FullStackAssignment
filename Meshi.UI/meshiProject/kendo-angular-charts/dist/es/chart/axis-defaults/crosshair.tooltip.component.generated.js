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
var AxisDefaultsCrosshairTooltipComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(AxisDefaultsCrosshairTooltipComponentGenerated, _super);
    function AxisDefaultsCrosshairTooltipComponentGenerated(configurationService) {
        var _this = _super.call(this, 'axisDefaults.crosshair.tooltip', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "font", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "format", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "padding", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AxisDefaultsCrosshairTooltipComponentGenerated.prototype, "visible", void 0);
    return AxisDefaultsCrosshairTooltipComponentGenerated;
}(SettingsComponent));
export { AxisDefaultsCrosshairTooltipComponentGenerated };
