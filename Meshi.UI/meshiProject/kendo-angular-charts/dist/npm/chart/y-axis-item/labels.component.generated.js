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
var YAxisLabelsComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(YAxisLabelsComponentGenerated, _super);
    function YAxisLabelsComponentGenerated(configurationService) {
        var _this = _super.call(this, 'labels', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisLabelsComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisLabelsComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisLabelsComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], YAxisLabelsComponentGenerated.prototype, "content", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisLabelsComponentGenerated.prototype, "culture", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisLabelsComponentGenerated.prototype, "dateFormats", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisLabelsComponentGenerated.prototype, "font", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisLabelsComponentGenerated.prototype, "format", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisLabelsComponentGenerated.prototype, "margin", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], YAxisLabelsComponentGenerated.prototype, "mirror", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisLabelsComponentGenerated.prototype, "padding", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisLabelsComponentGenerated.prototype, "position", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisLabelsComponentGenerated.prototype, "rotation", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], YAxisLabelsComponentGenerated.prototype, "skip", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Number)
    ], YAxisLabelsComponentGenerated.prototype, "step", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], YAxisLabelsComponentGenerated.prototype, "visible", void 0);
    tslib_1.__decorate([
        core_1.Input(),
        tslib_1.__metadata("design:type", Function)
    ], YAxisLabelsComponentGenerated.prototype, "visual", void 0);
    return YAxisLabelsComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.YAxisLabelsComponentGenerated = YAxisLabelsComponentGenerated;
