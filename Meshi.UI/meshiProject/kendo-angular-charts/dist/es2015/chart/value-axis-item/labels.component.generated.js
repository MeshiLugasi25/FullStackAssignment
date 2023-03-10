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
export class ValueAxisLabelsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('labels', configurationService);
        this.configurationService = configurationService;
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ValueAxisLabelsComponentGenerated.prototype, "background", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ValueAxisLabelsComponentGenerated.prototype, "border", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ValueAxisLabelsComponentGenerated.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], ValueAxisLabelsComponentGenerated.prototype, "content", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ValueAxisLabelsComponentGenerated.prototype, "font", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ValueAxisLabelsComponentGenerated.prototype, "format", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ValueAxisLabelsComponentGenerated.prototype, "margin", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], ValueAxisLabelsComponentGenerated.prototype, "mirror", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ValueAxisLabelsComponentGenerated.prototype, "padding", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ValueAxisLabelsComponentGenerated.prototype, "position", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], ValueAxisLabelsComponentGenerated.prototype, "rotation", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], ValueAxisLabelsComponentGenerated.prototype, "skip", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], ValueAxisLabelsComponentGenerated.prototype, "step", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], ValueAxisLabelsComponentGenerated.prototype, "visible", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], ValueAxisLabelsComponentGenerated.prototype, "visual", void 0);
