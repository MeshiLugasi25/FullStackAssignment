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
export class SeriesNotesIconComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.icon', configurationService);
        this.configurationService = configurationService;
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SeriesNotesIconComponentGenerated.prototype, "background", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], SeriesNotesIconComponentGenerated.prototype, "border", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], SeriesNotesIconComponentGenerated.prototype, "size", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], SeriesNotesIconComponentGenerated.prototype, "type", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], SeriesNotesIconComponentGenerated.prototype, "visible", void 0);
