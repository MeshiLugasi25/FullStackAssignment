/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { AxisDefaultsLabelsComponentGenerated } from '../axis-defaults/labels.component.generated';
/**
 * The configuration of the axis labels ([see example]({% slug api_charts_axisdefaultscomponent %})).
 */
let AxisDefaultsLabelsComponent = class AxisDefaultsLabelsComponent extends AxisDefaultsLabelsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
AxisDefaultsLabelsComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-axis-defaults-labels',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], AxisDefaultsLabelsComponent);
export { AxisDefaultsLabelsComponent };
