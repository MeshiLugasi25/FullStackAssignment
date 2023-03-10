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
var SeriesErrorBarsComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesErrorBarsComponentGenerated, _super);
    function SeriesErrorBarsComponentGenerated(configurationService) {
        var _this = _super.call(this, 'errorBars', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesErrorBarsComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SeriesErrorBarsComponentGenerated.prototype, "endCaps", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesErrorBarsComponentGenerated.prototype, "line", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesErrorBarsComponentGenerated.prototype, "value", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], SeriesErrorBarsComponentGenerated.prototype, "visual", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesErrorBarsComponentGenerated.prototype, "xValue", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesErrorBarsComponentGenerated.prototype, "yValue", void 0);
    return SeriesErrorBarsComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.SeriesErrorBarsComponentGenerated = SeriesErrorBarsComponentGenerated;
