/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesLabelsFromComponent } from '../../../chart/series-item/labels.from.component';
/**
 * The `from` label configuration of the StockChart navigator series.
 */
let NavigatorSeriesLabelsFromComponent = class NavigatorSeriesLabelsFromComponent extends SeriesLabelsFromComponent {
    constructor(configurationService) {
        super(configurationService);
        this.configurationService = configurationService;
        this.markAsVisible();
    }
};
NavigatorSeriesLabelsFromComponent = tslib_1.__decorate([
    Component({
        changeDetection: ChangeDetectionStrategy.OnPush,
        selector: 'kendo-chart-navigator-series-item-labels-from',
        template: ''
    }),
    tslib_1.__metadata("design:paramtypes", [ConfigurationService])
], NavigatorSeriesLabelsFromComponent);
export { NavigatorSeriesLabelsFromComponent };
