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
export class CategoryAxisCrosshairComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('crosshair', configurationService);
        this.configurationService = configurationService;
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CategoryAxisCrosshairComponentGenerated.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], CategoryAxisCrosshairComponentGenerated.prototype, "dashType", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], CategoryAxisCrosshairComponentGenerated.prototype, "opacity", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], CategoryAxisCrosshairComponentGenerated.prototype, "visible", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], CategoryAxisCrosshairComponentGenerated.prototype, "width", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], CategoryAxisCrosshairComponentGenerated.prototype, "tooltip", void 0);
