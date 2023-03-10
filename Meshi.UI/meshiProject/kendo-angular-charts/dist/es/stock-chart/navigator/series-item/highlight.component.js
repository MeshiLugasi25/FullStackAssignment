/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesHighlightComponent } from '../../../chart/series-item/highlight.component';
/**
 * The configuration options of the StockChart series highlight.
 */
var NavigatorSeriesHighlightComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorSeriesHighlightComponent, _super);
    function NavigatorSeriesHighlightComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorSeriesHighlightComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-series-item-highlight',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], NavigatorSeriesHighlightComponent);
    return NavigatorSeriesHighlightComponent;
}(SeriesHighlightComponent));
export { NavigatorSeriesHighlightComponent };
