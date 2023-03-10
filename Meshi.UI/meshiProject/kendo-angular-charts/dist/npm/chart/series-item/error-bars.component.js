/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var error_bars_component_generated_1 = require("../series-item/error-bars.component.generated");
/**
 * The error bars of the Chart series
 * ([see example]({% slug errorbars_chart_charts %})).
 */
var SeriesErrorBarsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesErrorBarsComponent, _super);
    // Place custom properties here
    function SeriesErrorBarsComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    SeriesErrorBarsComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-item-error-bars',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], SeriesErrorBarsComponent);
    return SeriesErrorBarsComponent;
}(error_bars_component_generated_1.SeriesErrorBarsComponentGenerated));
exports.SeriesErrorBarsComponent = SeriesErrorBarsComponent;
