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
var SeriesDefaultsLabelsComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDefaultsLabelsComponentGenerated, _super);
    function SeriesDefaultsLabelsComponentGenerated(configurationService) {
        var _this = _super.call(this, 'seriesDefaults.labels', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "content", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "font", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "format", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "margin", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "padding", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "visible", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "visual", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "from", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsLabelsComponentGenerated.prototype, "to", void 0);
    return SeriesDefaultsLabelsComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.SeriesDefaultsLabelsComponentGenerated = SeriesDefaultsLabelsComponentGenerated;
