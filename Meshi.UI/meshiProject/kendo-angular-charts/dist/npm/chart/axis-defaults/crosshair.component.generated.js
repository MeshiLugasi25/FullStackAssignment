/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var settings_component_1 = require("../../common/settings.component");
/**
 * @hidden
 */
var AxisDefaultsCrosshairComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(AxisDefaultsCrosshairComponentGenerated, _super);
    function AxisDefaultsCrosshairComponentGenerated(configurationService) {
        var _this = _super.call(this, 'axisDefaults.crosshair', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], AxisDefaultsCrosshairComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], AxisDefaultsCrosshairComponentGenerated.prototype, "dashType", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], AxisDefaultsCrosshairComponentGenerated.prototype, "opacity", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], AxisDefaultsCrosshairComponentGenerated.prototype, "visible", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], AxisDefaultsCrosshairComponentGenerated.prototype, "width", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], AxisDefaultsCrosshairComponentGenerated.prototype, "tooltip", void 0);
    return AxisDefaultsCrosshairComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.AxisDefaultsCrosshairComponentGenerated = AxisDefaultsCrosshairComponentGenerated;
