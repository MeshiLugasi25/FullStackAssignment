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
var PlotAreaComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(PlotAreaComponentGenerated, _super);
    function PlotAreaComponentGenerated(configurationService) {
        var _this = _super.call(this, 'plotArea', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], PlotAreaComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PlotAreaComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PlotAreaComponentGenerated.prototype, "margin", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], PlotAreaComponentGenerated.prototype, "opacity", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], PlotAreaComponentGenerated.prototype, "padding", void 0);
    return PlotAreaComponentGenerated;
}(SettingsComponent));
export { PlotAreaComponentGenerated };
