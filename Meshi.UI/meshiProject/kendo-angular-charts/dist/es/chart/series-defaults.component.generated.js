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
var SeriesDefaultsComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDefaultsComponentGenerated, _super);
    function SeriesDefaultsComponentGenerated(configurationService) {
        var _this = _super.call(this, 'seriesDefaults', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], SeriesDefaultsComponentGenerated.prototype, "gap", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsComponentGenerated.prototype, "highlight", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsComponentGenerated.prototype, "overlay", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], SeriesDefaultsComponentGenerated.prototype, "spacing", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsComponentGenerated.prototype, "stack", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesDefaultsComponentGenerated.prototype, "type", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], SeriesDefaultsComponentGenerated.prototype, "visual", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsComponentGenerated.prototype, "labels", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsComponentGenerated.prototype, "notes", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsComponentGenerated.prototype, "tooltip", void 0);
    return SeriesDefaultsComponentGenerated;
}(SettingsComponent));
export { SeriesDefaultsComponentGenerated };
