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
var CategoryAxisSelectComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryAxisSelectComponentGenerated, _super);
    function CategoryAxisSelectComponentGenerated(configurationService) {
        var _this = _super.call(this, 'select', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisSelectComponentGenerated.prototype, "from", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisSelectComponentGenerated.prototype, "max", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisSelectComponentGenerated.prototype, "min", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisSelectComponentGenerated.prototype, "mousewheel", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], CategoryAxisSelectComponentGenerated.prototype, "to", void 0);
    return CategoryAxisSelectComponentGenerated;
}(SettingsComponent));
export { CategoryAxisSelectComponentGenerated };
