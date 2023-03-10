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
var ValueAxisCrosshairComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(ValueAxisCrosshairComponentGenerated, _super);
    function ValueAxisCrosshairComponentGenerated(configurationService) {
        var _this = _super.call(this, 'crosshair', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], ValueAxisCrosshairComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], ValueAxisCrosshairComponentGenerated.prototype, "opacity", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ValueAxisCrosshairComponentGenerated.prototype, "visible", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], ValueAxisCrosshairComponentGenerated.prototype, "width", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], ValueAxisCrosshairComponentGenerated.prototype, "tooltip", void 0);
    return ValueAxisCrosshairComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.ValueAxisCrosshairComponentGenerated = ValueAxisCrosshairComponentGenerated;
