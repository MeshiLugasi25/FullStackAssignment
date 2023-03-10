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
export class AxisDefaultsTitleComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('axisDefaults.title', configurationService);
        this.configurationService = configurationService;
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AxisDefaultsTitleComponentGenerated.prototype, "background", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AxisDefaultsTitleComponentGenerated.prototype, "border", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AxisDefaultsTitleComponentGenerated.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AxisDefaultsTitleComponentGenerated.prototype, "font", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AxisDefaultsTitleComponentGenerated.prototype, "margin", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], AxisDefaultsTitleComponentGenerated.prototype, "padding", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AxisDefaultsTitleComponentGenerated.prototype, "position", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], AxisDefaultsTitleComponentGenerated.prototype, "rotation", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AxisDefaultsTitleComponentGenerated.prototype, "text", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AxisDefaultsTitleComponentGenerated.prototype, "visible", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], AxisDefaultsTitleComponentGenerated.prototype, "visual", void 0);
