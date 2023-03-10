/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesErrorBarsComponent } from '../../../chart/series-item/error-bars.component';
/**
 * The error bars of the StockChart navigator series.
 */
let NavigatorSeriesErrorBarsComponent = class NavigatorSeriesErrorBarsComponent extends SeriesErrorBarsComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
    }
};
NavigatorSeriesErrorBarsComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-error-bars',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesErrorBarsComponent);
export { NavigatorSeriesErrorBarsComponent };
