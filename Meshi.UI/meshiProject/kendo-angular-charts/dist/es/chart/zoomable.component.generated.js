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
var ZoomableComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(ZoomableComponentGenerated, _super);
    function ZoomableComponentGenerated(configurationService) {
        var _this = _super.call(this, 'zoomable', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ZoomableComponentGenerated.prototype, "mousewheel", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ZoomableComponentGenerated.prototype, "selection", void 0);
    return ZoomableComponentGenerated;
}(SettingsComponent));
export { ZoomableComponentGenerated };
