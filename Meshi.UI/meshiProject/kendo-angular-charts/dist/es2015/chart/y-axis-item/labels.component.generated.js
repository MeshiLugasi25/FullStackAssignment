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
export class YAxisLabelsComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('labels', configurationService);
        this.configurationService = configurationService;
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "background", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], YAxisLabelsComponentGenerated.prototype, "border", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], YAxisLabelsComponentGenerated.prototype, "content", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "culture", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], YAxisLabelsComponentGenerated.prototype, "dateFormats", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "font", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "format", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], YAxisLabelsComponentGenerated.prototype, "margin", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], YAxisLabelsComponentGenerated.prototype, "mirror", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], YAxisLabelsComponentGenerated.prototype, "padding", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], YAxisLabelsComponentGenerated.prototype, "position", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], YAxisLabelsComponentGenerated.prototype, "rotation", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], YAxisLabelsComponentGenerated.prototype, "skip", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], YAxisLabelsComponentGenerated.prototype, "step", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], YAxisLabelsComponentGenerated.prototype, "visible", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], YAxisLabelsComponentGenerated.prototype, "visual", void 0);
