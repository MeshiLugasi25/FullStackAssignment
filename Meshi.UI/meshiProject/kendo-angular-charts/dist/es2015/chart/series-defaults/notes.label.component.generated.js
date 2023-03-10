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
export class SeriesDefaultsNotesLabelComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('seriesDefaults.notes.label', configurationService);
        this.configurationService = configurationService;
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "background", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "border", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "content", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "font", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "format", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "position", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "rotation", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SeriesDefaultsNotesLabelComponentGenerated.prototype, "visible", void 0);
