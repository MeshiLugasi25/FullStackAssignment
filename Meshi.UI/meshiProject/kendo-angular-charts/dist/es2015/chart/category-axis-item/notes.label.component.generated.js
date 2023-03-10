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
export class CategoryAxisNotesLabelComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.label', configurationService);
        this.configurationService = configurationService;
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CategoryAxisNotesLabelComponentGenerated.prototype, "background", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], CategoryAxisNotesLabelComponentGenerated.prototype, "border", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CategoryAxisNotesLabelComponentGenerated.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], CategoryAxisNotesLabelComponentGenerated.prototype, "content", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CategoryAxisNotesLabelComponentGenerated.prototype, "font", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CategoryAxisNotesLabelComponentGenerated.prototype, "format", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CategoryAxisNotesLabelComponentGenerated.prototype, "position", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], CategoryAxisNotesLabelComponentGenerated.prototype, "rotation", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CategoryAxisNotesLabelComponentGenerated.prototype, "visible", void 0);
