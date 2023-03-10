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
var NavigatorSeriesLabelsFromComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorSeriesLabelsFromComponent, _super);
    function NavigatorSeriesLabelsFromComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.markAsVisible();
        return _this;
    }
    NavigatorSeriesLabelsFromComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-series-item-labels-from',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], NavigatorSeriesLabelsFromComponent);
    return NavigatorSeriesLabelsFromComponent;
}(SeriesLabelsFromComponent));
export { NavigatorSeriesLabelsFromComponent };
