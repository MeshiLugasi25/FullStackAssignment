/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { Input } from '@angular/core';
import { SettingsComponent } from '../common/settings.component';
/**
 * @hidden
 */
var LegendComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(LegendComponentGenerated, _super);
    function LegendComponentGenerated(configurationService) {
        var _this = _super.call(this, 'legend', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], LegendComponentGenerated.prototype, "align", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], LegendComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LegendComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], LegendComponentGenerated.prototype, "height", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LegendComponentGenerated.prototype, "labels", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LegendComponentGenerated.prototype, "margin", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], LegendComponentGenerated.prototype, "offsetX", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], LegendComponentGenerated.prototype, "offsetY", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], LegendComponentGenerated.prototype, "orientation", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LegendComponentGenerated.prototype, "padding", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], LegendComponentGenerated.prototype, "position", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LegendComponentGenerated.prototype, "reverse", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], LegendComponentGenerated.prototype, "visible", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], LegendComponentGenerated.prototype, "width", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LegendComponentGenerated.prototype, "markers", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], LegendComponentGenerated.prototype, "spacing", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LegendComponentGenerated.prototype, "inactiveItems", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LegendComponentGenerated.prototype, "item", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], LegendComponentGenerated.prototype, "title", void 0);
    return LegendComponentGenerated;
}(SettingsComponent));
export { LegendComponentGenerated };
