/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { LegendComponentGenerated } from './legend.component.generated';
/**
 * The configuration options of the Chart legend
 * ([see example]({% slug legend_chart_charts %})).
 */
let LegendComponent = class LegendComponent extends LegendComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
LegendComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-legend',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], LegendComponent);
export { LegendComponent };
