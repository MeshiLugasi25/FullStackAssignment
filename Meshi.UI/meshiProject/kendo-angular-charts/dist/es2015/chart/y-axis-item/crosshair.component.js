/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { YAxisCrosshairComponentGenerated } from '../y-axis-item/crosshair.component.generated';
/**
 * The crosshair configuration options
 * ([see example]({% slug api_charts_yaxiscomponent %})).
 */
let YAxisCrosshairComponent = class YAxisCrosshairComponent extends YAxisCrosshairComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
YAxisCrosshairComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-y-axis-item-crosshair',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], YAxisCrosshairComponent);
export { YAxisCrosshairComponent };
