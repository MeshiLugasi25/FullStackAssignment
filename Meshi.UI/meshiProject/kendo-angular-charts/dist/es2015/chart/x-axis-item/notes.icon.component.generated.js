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
export class XAxisNotesIconComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('notes.icon', configurationService);
        this.configurationService = configurationService;
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], XAxisNotesIconComponentGenerated.prototype, "background", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], XAxisNotesIconComponentGenerated.prototype, "border", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], XAxisNotesIconComponentGenerated.prototype, "size", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], XAxisNotesIconComponentGenerated.prototype, "type", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], XAxisNotesIconComponentGenerated.prototype, "visible", void 0);
