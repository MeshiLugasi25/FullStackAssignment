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
var SeriesMarkersComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesMarkersComponentGenerated, _super);
    function SeriesMarkersComponentGenerated(configurationService) {
        var _this = _super.call(this, 'markers', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesMarkersComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesMarkersComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], SeriesMarkersComponentGenerated.prototype, "rotation", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], SeriesMarkersComponentGenerated.prototype, "size", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesMarkersComponentGenerated.prototype, "type", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SeriesMarkersComponentGenerated.prototype, "visible", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], SeriesMarkersComponentGenerated.prototype, "visual", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesMarkersComponentGenerated.prototype, "from", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesMarkersComponentGenerated.prototype, "to", void 0);
    return SeriesMarkersComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.SeriesMarkersComponentGenerated = SeriesMarkersComponentGenerated;
