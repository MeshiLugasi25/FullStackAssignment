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
var YAxisCrosshairComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(YAxisCrosshairComponentGenerated, _super);
    function YAxisCrosshairComponentGenerated(configurationService) {
        var _this = _super.call(this, 'crosshair', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisCrosshairComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], YAxisCrosshairComponentGenerated.prototype, "opacity", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], YAxisCrosshairComponentGenerated.prototype, "visible", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], YAxisCrosshairComponentGenerated.prototype, "width", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisCrosshairComponentGenerated.prototype, "tooltip", void 0);
    return YAxisCrosshairComponentGenerated;
}(SettingsComponent));
export { YAxisCrosshairComponentGenerated };
