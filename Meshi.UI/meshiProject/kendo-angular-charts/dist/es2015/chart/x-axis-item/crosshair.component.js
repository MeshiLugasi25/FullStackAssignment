/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { XAxisCrosshairComponentGenerated } from '../x-axis-item/crosshair.component.generated';
/**
 * The crosshair configuration options
 * ([see example]({% slug api_charts_xaxiscomponent %})).
 */
let XAxisCrosshairComponent = class XAxisCrosshairComponent extends XAxisCrosshairComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
XAxisCrosshairComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-x-axis-item-crosshair',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], XAxisCrosshairComponent);
export { XAxisCrosshairComponent };
