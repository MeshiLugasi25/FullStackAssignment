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
var YAxisNotesComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(YAxisNotesComponentGenerated, _super);
    function YAxisNotesComponentGenerated(configurationService) {
        var _this = _super.call(this, 'notes', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], YAxisNotesComponentGenerated.prototype, "data", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisNotesComponentGenerated.prototype, "line", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisNotesComponentGenerated.prototype, "position", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], YAxisNotesComponentGenerated.prototype, "visual", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisNotesComponentGenerated.prototype, "icon", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisNotesComponentGenerated.prototype, "label", void 0);
    return YAxisNotesComponentGenerated;
}(SettingsComponent));
export { YAxisNotesComponentGenerated };
