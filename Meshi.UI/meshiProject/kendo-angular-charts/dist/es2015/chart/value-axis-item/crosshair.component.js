/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { ValueAxisCrosshairComponentGenerated } from '../value-axis-item/crosshair.component.generated';
/**
 * The crosshair configuration options ([see example]({% slug crosshairs_chart_charts %})).
 */
let ValueAxisCrosshairComponent = class ValueAxisCrosshairComponent extends ValueAxisCrosshairComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
ValueAxisCrosshairComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-value-axis-item-crosshair',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], ValueAxisCrosshairComponent);
export { ValueAxisCrosshairComponent };
