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
var XAxisLabelsComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(XAxisLabelsComponentGenerated, _super);
    function XAxisLabelsComponentGenerated(configurationService) {
        var _this = _super.call(this, 'labels', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisLabelsComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisLabelsComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisLabelsComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], XAxisLabelsComponentGenerated.prototype, "content", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisLabelsComponentGenerated.prototype, "culture", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisLabelsComponentGenerated.prototype, "dateFormats", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisLabelsComponentGenerated.prototype, "font", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisLabelsComponentGenerated.prototype, "format", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisLabelsComponentGenerated.prototype, "margin", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], XAxisLabelsComponentGenerated.prototype, "mirror", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisLabelsComponentGenerated.prototype, "padding", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], XAxisLabelsComponentGenerated.prototype, "position", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], XAxisLabelsComponentGenerated.prototype, "rotation", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], XAxisLabelsComponentGenerated.prototype, "skip", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], XAxisLabelsComponentGenerated.prototype, "step", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], XAxisLabelsComponentGenerated.prototype, "visible", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], XAxisLabelsComponentGenerated.prototype, "visual", void 0);
    return XAxisLabelsComponentGenerated;
}(SettingsComponent));
export { XAxisLabelsComponentGenerated };
