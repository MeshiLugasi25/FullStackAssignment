/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesErrorBarsComponentGenerated } from '../series-item/error-bars.component.generated';
/**
 * The error bars of the Chart series
 * ([see example]({% slug errorbars_chart_charts %})).
 */
let SeriesErrorBarsComponent = class SeriesErrorBarsComponent extends SeriesErrorBarsComponentGenerated {
    // Place custom properties here
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
SeriesErrorBarsComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-series-item-error-bars',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], SeriesErrorBarsComponent);
export { SeriesErrorBarsComponent };
