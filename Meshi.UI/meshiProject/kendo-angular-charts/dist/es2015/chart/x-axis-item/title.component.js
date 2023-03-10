/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { XAxisTitleComponentGenerated } from '../x-axis-item/title.component.generated';
/**
 * The title configuration of the Scatter Chart X axis.
 */
let XAxisTitleComponent = class XAxisTitleComponent extends XAxisTitleComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
XAxisTitleComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-x-axis-item-title',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], XAxisTitleComponent);
export { XAxisTitleComponent };
