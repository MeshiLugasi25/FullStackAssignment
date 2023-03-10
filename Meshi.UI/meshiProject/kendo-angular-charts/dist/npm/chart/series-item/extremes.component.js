/**-----------------------------------------------------------------------------------------
* Copyright © 2021 Progress Software Corporation. All rights reserved.
* Licensed under commercial license. See LICENSE.md in the project root for more information
*-------------------------------------------------------------------------------------------*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var configuration_service_1 = require("../../common/configuration.service");
var extremes_component_generated_1 = require("../series-item/extremes.component.generated");
/**
 * The configuration of the Chart series extremes.
 * Applies to extreme outliers.
 * For more information, refer to [`series.outliers`]({% slug api_charts_seriesitemcomponent %}#toc-outliers).
 */
var SeriesExtremesComponent = /** @class */ (function (_super) {
    tslib_1.__extends(SeriesExtremesComponent, _super);
    // Place custom properties here
    function SeriesExtremesComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    SeriesExtremesComponent = tslib_1.__decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            selector: 'kendo-chart-series-item-extremes',
            template: ''
        }),
        tslib_1.__metadata("design:paramtypes", [configuration_service_1.ConfigurationService])
    ], SeriesExtremesComponent);
    return SeriesExtremesComponent;
}(extremes_component_generated_1.SeriesExtremesComponentGenerated));
exports.SeriesExtremesComponent = SeriesExtremesComponent;
