/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../../common/configuration.service");
var highlight_component_1 = require("../../../chart/series-item/highlight.component");
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
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-navigator-series-item-highlight',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], NavigatorSeriesHighlightComponent);
    return NavigatorSeriesHighlightComponent;
}(highlight_component_1.SeriesHighlightComponent));
exports.NavigatorSeriesHighlightComponent = NavigatorSeriesHighlightComponent;
