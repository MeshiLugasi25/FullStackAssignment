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
var ValueAxisNotesLabelComponentGenerated = /** @class */ (function (_super) {
    tslib_1.__extends(ValueAxisNotesLabelComponentGenerated, _super);
    function ValueAxisNotesLabelComponentGenerated(configurationService) {
        var _this = _super.call(this, 'notes.label', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ValueAxisNotesLabelComponentGenerated.prototype, "background", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ValueAxisNotesLabelComponentGenerated.prototype, "border", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ValueAxisNotesLabelComponentGenerated.prototype, "color", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Function)
    ], ValueAxisNotesLabelComponentGenerated.prototype, "content", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ValueAxisNotesLabelComponentGenerated.prototype, "font", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ValueAxisNotesLabelComponentGenerated.prototype, "format", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], ValueAxisNotesLabelComponentGenerated.prototype, "position", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], ValueAxisNotesLabelComponentGenerated.prototype, "rotation", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], ValueAxisNotesLabelComponentGenerated.prototype, "visible", void 0);
    return ValueAxisNotesLabelComponentGenerated;
}(SettingsComponent));
export { ValueAxisNotesLabelComponentGenerated };
