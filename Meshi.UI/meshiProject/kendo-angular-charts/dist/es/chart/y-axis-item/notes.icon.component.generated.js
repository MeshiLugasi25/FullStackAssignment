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
var YAxisNotesIconComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(YAxisNotesIconComponentGenerated, _super);
    function YAxisNotesIconComponentGenerated(configurationService) {
        var _this = _super.call(this, 'notes.icon', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisNotesIconComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], YAxisNotesIconComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], YAxisNotesIconComponentGenerated.prototype, "size", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], YAxisNotesIconComponentGenerated.prototype, "type", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], YAxisNotesIconComponentGenerated.prototype, "visible", void 0);
    return YAxisNotesIconComponentGenerated;
}(SettingsComponent));
export { YAxisNotesIconComponentGenerated };
