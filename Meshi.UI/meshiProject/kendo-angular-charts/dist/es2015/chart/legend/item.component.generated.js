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
export class LegendItemComponentGenerated extends SettingsComponent {
    constructor(configurationService) {
        super('legend.item', configurationService);
        this.configurationService = configurationService;
    }
}
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], LegendItemComponentGenerated.prototype, "cursor", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Function)
], LegendItemComponentGenerated.prototype, "visual", void 0);
