/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesLabelsComponent } from '../../../chart/series-item/labels.component';
/**
 * The label configuration of the StockChart navigator series.
 */
let NavigatorSeriesLabelsComponent = class NavigatorSeriesLabelsComponent extends SeriesLabelsComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
NavigatorSeriesLabelsComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-labels',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesLabelsComponent);
export { NavigatorSeriesLabelsComponent };
