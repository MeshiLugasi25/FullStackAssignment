/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../common/configuration.service");
var series_defaults_component_generated_1 = require("./series-defaults.component.generated");
/**
 * The default options for all series
 * ([see example]({% slug series_chart_charts %}#toc-default-series-configuration)).
 */
var SeriesDefaultsComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesDefaultsComponent, _super);
    // Place custom properties here
    function SeriesDefaultsComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    SeriesDefaultsComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-defaults',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], SeriesDefaultsComponent);
    return SeriesDefaultsComponent;
}(series_defaults_component_generated_1.SeriesDefaultsComponentGenerated));
exports.SeriesDefaultsComponent = SeriesDefaultsComponent;
