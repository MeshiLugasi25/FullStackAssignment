/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { PlotAreaComponentGenerated } from './plot-area.component.generated';
/**
 * The configuration options of the plot area
 * ([see example]({% slug plotarea_chart_charts %})).
 * The plot area is the area which displays the series.
 */
let PlotAreaComponent = class PlotAreaComponent extends PlotAreaComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
PlotAreaComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-plot-area',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], PlotAreaComponent);
export { PlotAreaComponent };
