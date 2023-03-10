/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesOutliersComponent } from '../../../chart/series-item/outliers.component';
/**
 * The outliers configuration of the StockChart navigator series. Applies to mild outliers.
 */
var NavigatorSeriesOutliersComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorSeriesOutliersComponent, _super);
    function NavigatorSeriesOutliersComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorSeriesOutliersComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-series-item-outliers',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], NavigatorSeriesOutliersComponent);
    return NavigatorSeriesOutliersComponent;
}(SeriesOutliersComponent));
export { NavigatorSeriesOutliersComponent };
