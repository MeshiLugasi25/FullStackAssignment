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
var SeriesDefaultsNotesIconComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDefaultsNotesIconComponentGenerated, _super);
    function SeriesDefaultsNotesIconComponentGenerated(configurationService) {
        var _this = _super.call(this, 'seriesDefaults.notes.icon', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesDefaultsNotesIconComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], SeriesDefaultsNotesIconComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], SeriesDefaultsNotesIconComponentGenerated.prototype, "size", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SeriesDefaultsNotesIconComponentGenerated.prototype, "type", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], SeriesDefaultsNotesIconComponentGenerated.prototype, "visible", void 0);
    return SeriesDefaultsNotesIconComponentGenerated;
}(SettingsComponent));
export { SeriesDefaultsNotesIconComponentGenerated };
