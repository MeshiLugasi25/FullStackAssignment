/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesOutliersComponentGenerated } from '../series-item/outliers.component.generated';
/**
 * The configuration of the Chart series outliers.
 * Applies to mild outliers.
 * For more information, refer to the [`series.extremes`]({% slug api_charts_seriesitemcomponent %}#toc-extremes) option.
 */
var SeriesOutliersComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesOutliersComponent, _super);
    // Place custom properties here
    function SeriesOutliersComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    SeriesOutliersComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-item-outliers',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], SeriesOutliersComponent);
    return SeriesOutliersComponent;
}(SeriesOutliersComponentGenerated));
export { SeriesOutliersComponent };
