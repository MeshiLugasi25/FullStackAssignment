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
var SeriesDefaultsTooltipComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDefaultsTooltipComponentGenerated, _super);
    function SeriesDefaultsTooltipComponentGenerated(configurationService) {
        var _this = _super.call(this, 'seriesDefaults.tooltip', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesDefaultsTooltipComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsTooltipComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesDefaultsTooltipComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesDefaultsTooltipComponentGenerated.prototype, "font", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesDefaultsTooltipComponentGenerated.prototype, "format", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsTooltipComponentGenerated.prototype, "padding", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SeriesDefaultsTooltipComponentGenerated.prototype, "visible", void 0);
    return SeriesDefaultsTooltipComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.SeriesDefaultsTooltipComponentGenerated = SeriesDefaultsTooltipComponentGenerated;
