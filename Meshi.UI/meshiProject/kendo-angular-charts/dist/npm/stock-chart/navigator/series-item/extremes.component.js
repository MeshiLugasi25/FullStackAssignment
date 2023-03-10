/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../../common/configuration.service");
var extremes_component_1 = require("../../../chart/series-item/extremes.component");
/**
 * The extremes configuration of the StockChart navigator series. Applies to extreme outliers.
 */
var NavigatorSeriesExtremesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NavigatorSeriesExtremesComponent, _super);
    function NavigatorSeriesExtremesComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    NavigatorSeriesExtremesComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-series-item-extremes',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], NavigatorSeriesExtremesComponent);
    return NavigatorSeriesExtremesComponent;
}(extremes_component_1.SeriesExtremesComponent));
exports.NavigatorSeriesExtremesComponent = NavigatorSeriesExtremesComponent;
