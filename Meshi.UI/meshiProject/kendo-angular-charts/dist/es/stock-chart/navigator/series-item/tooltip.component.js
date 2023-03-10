/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesTooltipComponent } from '../../../chart/series-item/tooltip.component';
/**
 * The tooltip configuration of the StockChart navigator series.
 * The StockChart navigator series tooltip is displayed when the `navigator.series.tooltip.visible` option is set to `true`.
 */
var NavigatorSeriesTooltipComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorSeriesTooltipComponent, _super);
    function NavigatorSeriesTooltipComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorSeriesTooltipComponent = tslib_1.__decorate([
        Component({
            changeDetection: ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-series-item-tooltip',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [ConfigurationService])
    ], NavigatorSeriesTooltipComponent);
    return NavigatorSeriesTooltipComponent;
}(SeriesTooltipComponent));
export { NavigatorSeriesTooltipComponent };
